import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCommonModule } from '../../app.common.module';
import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';

import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page.routes';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, SearchPageRoutingModule, AppCommonModule, CopyMatrixPipeModule],
  providers: []
})
export class SearchPageModule {}
