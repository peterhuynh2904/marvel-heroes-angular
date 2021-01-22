import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { throwError } from 'rxjs';

import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../shared/pipes/testing/pipes.testing.module';
import { GENERIC_ERROR } from '../../shared/services/marvel-gateway/marvel-gateway.constants';
import { MarvelGatewayService } from '../../shared/services/marvel-gateway/marvel-gateway.service';

import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let service: MarvelGatewayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule, HttpClientTestingModule],
      declarations: [SearchPageComponent],
      providers: [MarvelGatewayService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MarvelGatewayService);

    component.ngOnInit();
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('View', () => {
    describe('Error message', () => {
      it('should not show message', () => {
        component.errorMessage = null;
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.js-error-message')).toBeFalsy();
      });

      it('should show message', () => {
        component.errorMessage = 'fake_error';
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.js-error-message').textContent).toContain('fake_error');
      });
    });
  });
});
