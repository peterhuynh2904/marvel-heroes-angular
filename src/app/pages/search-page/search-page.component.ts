import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { ICharacter, IErrorData } from '../../shared/interfaces/shared.interface';
import { CopyMatrixPipe } from '../../shared/pipes/copy-matrix/copy-matrix.pipe';
import { MarvelGatewayService } from '../../shared/services/marvel-gateway/marvel-gateway.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {
  searchName = new Subject<string>();
  characters: Observable<ICharacter[]>;
  errorMessage: string;
  searchCopy = {
    label: 'search.label',
    placeholder: 'search.placeholder',
    found: 'search.found',
    notfound: 'search.notfound'
  };

  constructor(private marvelService: MarvelGatewayService, private copyMatrixPipe: CopyMatrixPipe) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters = this.searchName.pipe(
      tap(() => (this.errorMessage = null)),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((name: string) => {
        if (name.length <= 4) {
          return of(null);
        }
        return this.marvelService.getCharactersByName(name);
      }),
      catchError((error: IErrorData) => {
        this.errorMessage = this.copyMatrixPipe.transform(error.code) || '';
        return of(null);
      })
    );
  }
}
