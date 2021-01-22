import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMatrixPipeModule } from '../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../shared/pipes/testing/pipes.testing.module';
import { MarvelGatewayService } from '../../shared/services/marvel-gateway/marvel-gateway.service';

import { CharactersPageComponent } from './characters-page.component';

describe('CharactersPageComponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;
  let service: MarvelGatewayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule, HttpClientTestingModule],
      declarations: [CharactersPageComponent],
      providers: [MarvelGatewayService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersPageComponent);
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
