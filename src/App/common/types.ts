export interface IFormInputSignIn {
    email: string;
    password: string;
  }

  export interface IFormInputSignUp extends IFormInputSignIn {
    name: string;
  }
  
  export enum AuthActionTypes {
    SUCCESS = "success",
    ERROR = "error",
  }