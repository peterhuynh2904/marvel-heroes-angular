import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

import { CopyMatrixPipeModule } from '../../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../../shared/pipes/testing/pipes.testing.module';
import { MarvelGatewayService } from '../../../shared/services/marvel-gateway/marvel-gateway.service';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let service: MarvelGatewayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule, HttpClientTestingModule],
      declarations: [CharacterDetailComponent],
      providers: [
        MarvelGatewayService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 123 }) }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MarvelGatewayService);

    component.ngOnInit();
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });
});
