import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/Util/Util";

const initialState = {
  loading: false,
  token: null,
  error: null,
  orders: null,
  orderEdited: null,
  maxPages: null, 
  filter: null
};

const editOrder = (state, action) => {
  return updateObject(state, { orderEdited: action.orderEdited, error: null, orders: null});
};

const adminOrders = (state, action) => {
  return updateObject(state, {
    orders: action.orders.reverse(),
    maxPages: action.max,
    error: null,
    orderEdited: null,
    filter: action.filter
  });
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, orders: null, loading: false });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    token: action.token,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    loading: false,
    lists: null,
    error: null,
  });
};
const resetError = (state, action) => {
  return updateObject(state, { error: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_ORDERS:
      return adminOrders(state, action);
    case actionTypes.ADMIN_EDIT_ORDER:
      return editOrder(state, action);
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_RESET_ERROR:
      return resetError(state, action);
    default:
      return state;
  }
};

export default reducer;
