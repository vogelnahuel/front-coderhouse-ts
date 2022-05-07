export type CartProductypes  = {
    isFetching: boolean;
    cartSelected:any
    navigate:any;
    DeleteProductCart:(idCart:string,idProduct:any,navigate:any)=>void;
    AddProductCart:(idCart:string,idProduct:any,navigate:any)=>void;
}
export type ContainerCartProductTypes  = {
    isFetching: boolean;
    cartSelected:any;
    DeleteProductCart:(idCart:string,idProduct:any,navigate:any)=>void;
    AddProductCart:(idCart:string,idProduct:any,navigate:any)=>void;
}