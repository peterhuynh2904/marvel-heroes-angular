import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersPageComponent } from './characters-page.component';

const routes: Routes = [
  {
    path: ':name/:id',
    component: CharacterDetailComponent
  },
  { path: '', component: CharactersPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
