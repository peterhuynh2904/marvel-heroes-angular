import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters-page/characters-page.module').then((m) => m.CharactersPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search-page/search-page.module').then((m) => m.SearchPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/characters-page/characters-page.module').then((m) => m.CharactersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
