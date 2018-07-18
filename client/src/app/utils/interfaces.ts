export namespace Interfaces {

  export interface IUser {
    name: string;
    email: string;
    password: string;
    avatar: string;
  }

  export interface IRecipe {
    id: string;
    user: IUser;
    name: string;
    userName: string;
    shortText: string;
    description: string;
    ingredients: string;
    date: Date;
    comments: IComment[];
  }

  export interface IComment {
    user: IUser;
    userName: string;
    text: string;
    avatar: string;
    date: Date;
  }
}
