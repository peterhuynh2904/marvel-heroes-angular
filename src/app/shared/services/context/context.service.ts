import { Injectable } from '@angular/core';

import { IImage } from '../../interfaces/shared.interface';

import { IMAGE_QUALITY } from './context.constants';

@Injectable({ providedIn: 'root' })
export class ContextService {
  public getPortraitImage(image: IImage) {
    return image ? `${image.path}/${IMAGE_QUALITY}.${image.extension}` : '';
  }
}
