
export interface IPaginatorResponse {
  page: number;
  take: number;
  totalCount: number;
}

export enum GenderEnum {
  Male = 'male',
  Female = 'female',
}
export interface IDataItemResponse {
  id: number;
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  result: number;
  distance: number;
  speed: number;
  birthDate: Date;
  isFinished: boolean;
}

export interface IDataResponse {
  items: IDataItemResponse[];
  displayed: IDataItemResponse[];
  paginator: IPaginatorResponse;
}
