export interface IPlan {
  age: number;
  description: string[];
  name: string;
  price: number;
}

export interface IUser {
  name: string;
  lastName: string;
  birthDay: string;
  age: number;
  nroDocument: string;
  phone: string;
}

export enum Option {
  "MY_SELF" = 1,
  "FOR_SOMEONE_ELSE" = 2,
}
