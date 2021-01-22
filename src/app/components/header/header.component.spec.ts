import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../shared/pipes/testing/pipes.testing.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule],
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it("should have pageTitle 'component.pageTitle'", () => {
      expect(component.pageTitle).toEqual('app.pageTitle');
    });
  });

  describe('View', () => {
    it('should render title', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-page-title').textContent).toContain('fake-copy-matrix__app.pageTitle');
    });
  });
});
