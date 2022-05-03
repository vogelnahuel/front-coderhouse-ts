import { Header } from "../../components/header/header";
import { Nav } from "../../components/nav/nav";
import { DashboardTypes } from "./dashboardTypes";
import './dashboard.scss'

export const Dashboard: React.FC<DashboardTypes> = ({
  isFetching
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
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
    </>
  );
};
