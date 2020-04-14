import axios from "../../axios/axios";
import * as actionTypes from "./actionTypes";

const adminOrders = (orders) => {
  return {
    type: actionTypes.ADMIN_ORDERS,
    orders: orders,
  };
};

export const editOrder = (order) => {
  return {
    type: actionTypes.ADMIN_EDIT_ORDER,
    orderEdited: order,
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

const setAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userEmail");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authResetError = () => {
  return {
    type: actionTypes.AUTH_RESET_ERROR,
  };
};

export const postAuth = async (formData, url, dispatch) => {
  try {
    const res = await axios.post(url, formData);
    const expirationDate = new Date(
      new Date().getTime() + res.data.expiresTimeInMiliseconds
    );
    const timeToLogout = expirationDate.getTime() - new Date().getTime();

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("expirationDate", expirationDate);
    console.log("Before Orders Rendering or not??????");

    dispatch(setAuthTimeout(timeToLogout));
    dispatch(authSuccess(res.data.token));
  } catch (e) {
    console.log("Error while trying to login.");
    console.log(e.response);
    dispatch(authFail(e.response.data.message));
  }
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    let url = "/admin/login";
    const formData = new FormData();
    console.log(email + " " + password);
    formData.append("email", email);
    formData.append("password", password);

    postAuth(formData, url, dispatch);
  };
};

export const fetchOrders = (filter) => {
  return async (dispatch) => {
    try {
      console.log(filter);
      let toFilter = filter.trim() === "" ? "false" : filter;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token").toString();
      const url = "/admin/orders/" + toFilter;
      let res = await axios.get(url);

      dispatch(adminOrders(res.data.orders));
    } catch (err) {
      err.response.message = "Not valid filter";
      dispatch(authFail(err.response));
      console.log("Error while trying to fetch orders.");
    }
  };
};

export const authCheckState = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          setAuthTimeout(expirationDate.getTime() - new Date().getTime())
        );
      }
    }
  };
};
