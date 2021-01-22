import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../../environments/environment';

import { GENERIC_ERROR, MARVEL_CHARACTERS_URL } from './marvel-gateway.constants';
import { MarvelGatewayService } from './marvel-gateway.service';

describe('ContextService', () => {
  let service: MarvelGatewayService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(MarvelGatewayService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('getParams method', () => {
    it('should return correct params for Marvel Api', () => {
      environment.privateKey = 'private';
      environment.publicKey = 'public';
      const hashSpy = spyOn(service as any, 'generateHash');
      const result = (service as any).getParams;
      expect(hashSpy).toHaveBeenCalled();
      expect(result).toContain('public');
    });
  });

  describe('characterQuery method', () => {
    it('should accept args and call httpClient get with correct args and method GET', () => {
      (service as any).characterQuery('apiUrl').subscribe();
      const req = httpMock.expectOne('apiUrl');
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('apiUrl');
    });

    describe('when fail', () => {
      it('Should return a technical error', () => {
        let error;
        (service as any).characterQuery('apiUrl').subscribe(
          (res) => {},
          (err) => (error = err)
        );
        httpMock.expectOne('apiUrl').flush('error', { status: 400, statusText: 'Bad request' });
        expect(error).toEqual(GENERIC_ERROR);
      });
    });

    describe('when success', () => {
      it('should return proper data', () => {
        const testData = {
          data: {
            results: [
              {
                id: 'testId',
                name: 'testName',
                description: 'testDescription',
                thumbnail: {}
              }
            ]
          }
        };
        let response;
        (service as any).characterQuery('apiUrl').subscribe((res) => (response = res));
        const req = httpMock.expectOne('apiUrl');
        expect(req.request.responseType).toEqual('json');
        expect(req.cancelled).toBeFalsy();
        req.flush(testData);
        expect(response).toEqual([
          {
            id: 'testId',
            name: 'testName',
            description: 'testDescription',
            thumbnail: {}
          }
        ]);
      });
    });
  });

  describe('getCharacters method', () => {
    it('should call characterQuery with correct url and params', () => {
      const spy = spyOn(service as any, 'characterQuery');
      spyOnProperty(service as any, 'getParams').and.returnValue('testParams');
      service.getCharacters();
      expect(spy).toHaveBeenCalledWith(`${MARVEL_CHARACTERS_URL}?testParams`);
    });
  });

  describe('getCharactersByName method', () => {
    it('should call characterQuery with correct url and params', () => {
      const spy = spyOn(service as any, 'characterQuery');
      spyOnProperty(service as any, 'getParams').and.returnValue('testParams');
      service.getCharactersByName('testName');
      expect(spy).toHaveBeenCalledWith(`${MARVEL_CHARACTERS_URL}?testParams&nameStartsWith=testName`);
    });
  });

  describe('getCharacterById method', () => {
    it('should call characterQuery with correct url and params', () => {
      const spy = spyOn(service as any, 'characterQuery');
      spyOnProperty(service as any, 'getParams').and.returnValue('testParams');
      service.getCharacterById('1');
      expect(spy).toHaveBeenCalledWith(`${MARVEL_CHARACTERS_URL}/1?testParams`);
    });
  });
});
