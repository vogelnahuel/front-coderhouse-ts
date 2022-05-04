export type ProductTypes  = {
    isFetching: boolean;
    products:any
}
export type ContainerProductTypes  = {
    isFetching: boolean;
    getAllProducts:()=>void;
    products:any;
}