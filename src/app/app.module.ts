import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AppServiceModule } from './app.service.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { COPY_MATRIX_MAPPING } from './shared/constants/copy-matrix.constant';
import { IAppSettings } from './shared/interfaces/shared.interface';
import { CopyMatrixPipeModule } from './shared/pipes/copy-matrix/copy-matrix.module';
import { COPY_MATRIX } from './shared/tokens/tokens';

const getAppSettings = (): IAppSettings => ({ language: 'eng' });

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavigationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CopyMatrixPipeModule, AppRoutingModule, AppServiceModule],
  providers: [
    {
      provide: COPY_MATRIX,
      useValue: COPY_MATRIX_MAPPING[getAppSettings().language]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
