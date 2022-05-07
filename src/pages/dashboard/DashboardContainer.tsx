
import { connect } from "react-redux";
import {
  dashboardSelector
} from "../../reducers/dashboard";
import {
  loginSelector
} from "../../reducers/login";
import {
  actions as cartActions
} from "../../reducers/cart";
import { AppDispatch, RootState } from "../../store";
import { Dashboard } from "./Dashboard";
import { ContainerDashboardTypes } from "./dashboardTypes";

const DashboardContainer = (props: ContainerDashboardTypes): JSX.Element => {

  return <Dashboard {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: dashboardSelector(state).fetching,
  user:loginSelector(state).login
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createCart: (id:string) => {
    dispatch(cartActions.createCartRequest(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);