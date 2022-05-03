
import { connect } from "react-redux";
import {
  dashboardSelector
} from "../../reducers/dashboard";
import { AppDispatch, RootState } from "../../store";
import { Dashboard } from "./Dashboard";
import { ContainerDashboardTypes } from "./dashboardTypes";

const DashboardContainer = (props: ContainerDashboardTypes): JSX.Element => {


  return <Dashboard {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: dashboardSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);