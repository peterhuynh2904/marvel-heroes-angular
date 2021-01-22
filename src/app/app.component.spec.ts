import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CopyMatrixPipeModule } from './shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from './shared/pipes/testing/pipes.testing.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule, RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent, NavigationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });
  });
});
