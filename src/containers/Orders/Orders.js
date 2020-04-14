import React, { Component } from "react";
import classes from "./Orders.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import OrderSummery from "./OrderSummery/OrderInfo";
import Filter from "./Filter/Filter";

class Orders extends Component {
  state = {
    orders: null,
    filter: null,
  };

  componentDidMount() {
    console.log("[Ordres] componentDidMount");
    this.props.fetchOrders("false");
  }

  editHandler = (order) => {
    this.props.history.push('/edit');
    this.props.startEditOrder(order);
  };

  createOrders = () => {
    let res = null;
    if (this.props.orders) {
      let orders = this.props.orders.map((order) => {
        return <OrderSummery edit={this.editHandler} order={order} key={order._id} />
      });

    res = <div className={classes.Orders}>{orders}</div>
     
    }
    return  res;
  };

  filterOrdersHandler = (filter) => {
    this.props.fetchOrders(filter);
    console.log("filter orders!");
  };

  createFilter = () => {
    return <Filter filter={this.filterOrdersHandler} />;
  };

  render() {
    console.log("[Orders] render");
    const orders = this.createOrders();
    const filter = this.createFilter();
    const ordersPage = (
      <div className={classes.OrdersPage}>
        {filter}
        {orders}
      </div>
    );
    return ordersPage;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (filter) => {
      dispatch(actions.fetchOrders(filter));
    },
    startEditOrder: (order) => { dispatch(actions.editOrder(order))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
