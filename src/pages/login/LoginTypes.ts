

export type LoginTypes = {
  login: any;
  isFetching: boolean;
  validationSchema:any;
  postLogin: (params:any)=>void;
};
export type LoginSchema ={
  password:string,
  email:string
}
export type LoginContainerTypes = {
  login: any;
  isFetching: boolean;
  postLogin: (params:any)=>void;
};