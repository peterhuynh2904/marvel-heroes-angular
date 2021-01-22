import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ContextService } from './shared/services/context/context.service';
import { MarvelGatewayService } from './shared/services/marvel-gateway/marvel-gateway.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [MarvelGatewayService, ContextService]
})
export class AppServiceModule {}
