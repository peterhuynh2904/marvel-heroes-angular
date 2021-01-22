import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MarvelGatewayService } from '../../../shared/services/marvel-gateway/marvel-gateway.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnInit {
  character: Observable<any>;
  loadingText: string = 'app.loading';

  constructor(private route: ActivatedRoute, private marvelService: MarvelGatewayService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.character = this.route.params.pipe(
      map((p) => p.id),
      switchMap((id: string) => {
        return this.marvelService.getCharacterById(id);
      }),
      map((result: any) => result[0])
    );
  }
}
