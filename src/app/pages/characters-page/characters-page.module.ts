import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCommonModule } from '../../app.common.module';
import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersPageRoutingModule } from './characters-page.routes';

@NgModule({
  declarations: [CharactersPageComponent, CharacterDetailComponent],
  imports: [CommonModule, CharactersPageRoutingModule, AppCommonModule, CopyMatrixPipeModule],
  providers: []
})
export class CharactersPageModule {}
