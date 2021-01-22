import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [CharacterCardComponent],
  exports: [CharacterCardComponent],
  imports: [CommonModule],
  providers: []
})
export class AppCommonModule {}
