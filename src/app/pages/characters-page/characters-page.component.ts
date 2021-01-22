import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ICharacter, IErrorData } from '../../shared/interfaces/shared.interface';
import { CopyMatrixPipe } from '../../shared/pipes/copy-matrix/copy-matrix.pipe';
import { MarvelGatewayService } from '../../shared/services/marvel-gateway/marvel-gateway.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersPageComponent implements OnInit {
  searchName = new Subject<string>();
  characters: Observable<unknown>;
  title: string = 'characters.title';
  loadingText: string = 'app.loading';
  errorMessage: string;

  constructor(private marvelService: MarvelGatewayService, private copyMatrixPipe: CopyMatrixPipe) {}

  ngOnInit() {
    this.characters = this.marvelService.getCharacters().pipe(
      tap(() => {
        this.errorMessage = null;
      }),
      catchError((error: IErrorData) => {
        this.errorMessage = this.copyMatrixPipe.transform(error.code) || '';
        return null;
      })
    );
  }
}
