export type ProductTypes  = {
    isFetching: boolean;
    products:any;
    navigateProductId:(id:string)=>void;
}
export type ContainerProductTypes  = {
    isFetching: boolean;
    getAllProducts:()=>void;
    products:any;
}