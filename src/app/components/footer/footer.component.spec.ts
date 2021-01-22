import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../shared/pipes/testing/pipes.testing.module';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule],
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it("should have copyright 'component.pageCopyright'", () => {
      expect(component.pageCopyRight).toEqual('app.copyRight');
    });
  });

  describe('View', () => {
    it('should render copyright', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-page-copyright').textContent).toContain('fake-copy-matrix__app.copyRight');
    });
  });
});
