import { TestBed } from '@angular/core/testing';

import { IImage } from '../../interfaces/shared.interface';

import { ContextService } from './context.service';

describe('ContextService', () => {
  let service: ContextService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: []
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ContextService);
  });

  describe('getPortraitImage method', () => {
    it('should return empty string if param is not provided', () => {
      const result = service.getPortraitImage(null);
      expect(result).toEqual('');
    });

    it('should return correct image url', () => {
      const mock: IImage = {
        path: 'testPath',
        extension: 'jpg'
      };
      const result = service.getPortraitImage(mock);
      expect(result).toEqual('testPath/portrait_uncanny.jpg');
    });
  });
});
