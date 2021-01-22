import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ICharacter, IErrorData } from '../../interfaces/shared.interface';

import { GENERIC_ERROR, MARVEL_CHARACTERS_URL } from './marvel-gateway.constants';

import md5 from 'md5';

@Injectable({ providedIn: 'root' })
export class MarvelGatewayService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<ICharacter[] | IErrorData> {
    return this.characterQuery(`${MARVEL_CHARACTERS_URL}?${this.getParams}`);
  }

  getCharactersByName(name: string): Observable<ICharacter[] | IErrorData> {
    return this.characterQuery(`${MARVEL_CHARACTERS_URL}?${this.getParams}&nameStartsWith=${name}`);
  }

  getCharacterById(id: string): Observable<ICharacter[] | IErrorData> {
    return this.characterQuery(`${MARVEL_CHARACTERS_URL}/${id}?${this.getParams}`);
  }

  private characterQuery(url: string): Observable<ICharacter[] | IErrorData> {
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response.data.results;
      }),
      catchError(() => {
        // Hard coded a technical error. API should return corresponse code
        return throwError(GENERIC_ERROR);
      })
    );
  }

  private get getParams(): string {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(environment.privateKey, environment.publicKey, timestamp);
    return `apikey=${environment.publicKey}&ts=${timestamp}&hash=${hash}`;
  }

  private generateHash(privateKey, publicKey, timestamp): string {
    return md5(`${timestamp}${privateKey}${publicKey}`);
  }
}
