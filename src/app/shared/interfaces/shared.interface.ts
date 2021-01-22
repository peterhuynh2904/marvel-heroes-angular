export interface IAppSettings {
  language: string;
}

export interface ICharacter {
  id: string;
  name: string;
  description: string;
  thumbnail: IImage;
}

export interface IImage {
  path: string;
  extension: string;
}

export interface IErrorData {
  code: string;
  message: string;
}
