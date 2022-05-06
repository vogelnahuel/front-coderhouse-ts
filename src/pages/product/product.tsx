import { Header } from "../../components/header/header";
import { Nav } from "../../components/nav/nav";
import { ProductTypes } from "./productTypes";
import './product.scss'
import { Link } from "react-router-dom";

export const Product: React.FC<ProductTypes> = ({
  isFetching,
  products,
  navigateProductId
}): JSX.Element => {

  return (
    <>
      <Header/>
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">
            Listado de productos
          </h2>
          <h3 className="subtitle_Dashboard_Admin">
            Seleccione uno o cree uno
          </h3>
          <Link className="create-product" to={"/productCreate"}>
            Crear uno
          </Link>
          <table className="products-table">
            <thead>
              <tr>
                <th align="left">Id</th>
                <th align="left">Nombre</th>
                <th align="left">Precio</th>
                <th align="left">Stock</th>
                <th align="left">Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {
                products && products.length>0 ? products.map((element:any) => 
                    <tr key={element._id} id={element._id} onClick={()=>navigateProductId(element._id)}>
                      <td>{element._id}</td>
                      <td>{element.name}</td>
                      <td>{element.price}</td>
                      <td>{element.stock}</td>
                      <td>{element.description}</td>
                    </tr>
                ) : null
              }
            </tbody>
          </table>
          
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
    </>
  );
};
