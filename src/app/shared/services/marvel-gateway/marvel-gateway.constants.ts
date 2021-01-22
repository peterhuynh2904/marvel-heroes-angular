import { IErrorData } from '../../interfaces/shared.interface';

export const MARVEL_CHARACTERS_URL = 'https://gateway.marvel.com/v1/public/characters';
export const GENERIC_ERROR: IErrorData = {
  code: 'error.ERROR_001',
  message: 'Generic error'
};
