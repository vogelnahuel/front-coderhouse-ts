import { Header } from "../../components/header/header";
import { Nav } from "../../components/nav/nav";
import { ProductTypes } from "./productTypes";


export const Product: React.FC<ProductTypes> = ({
  isFetching,
  products
}): JSX.Element => {
  return (
    <>
      <Header/>
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">
            Dashboard
          </h2>
          <h3 className="subtitle_Dashboard_Admin">
            visualiza lo mas importante
          </h3>
          <table>
            <thead>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripcion</th>
            </thead>
            <tbody>
              {
                products &&  products.length > 0 ? products.forEach((element:any) => 
                    <tr>
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
