export type CartTypes  = {
    isFetching: boolean;
    cartSelected:any;
    id:string;
    navigate:any;
    deleteCart:(id:string,navigate:any)=>void;
}
export type ContainerCartTypes  = {
    isFetching: boolean;
    cartSelected:any;
    getCartById:(id:string)=>void;
    deleteCart:(id:string,navigate:any)=>void;
}