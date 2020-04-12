import React, { Component } from "react";
import classes from "./Orders.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import OrderSummery from "./OrderSummery/OrderSummery";
import Colors from "../../shared/Colors/Colors";
import Filter from "./Filter/Filter";

class Orders extends Component {
  state = {
    orders: null,
    filter: null,
  };

  componentDidMount() {
    // Get all the orders from server
    // this.fetchOrders();
    console.log("[Ordres] componentDidMount");
    this.props.fetchOrders("false");
  }

  createDetailsForOrderSummery = (order) => {
    const res = [
      { label: "_id", content: order._id, color: Colors.RED, id: order._id},
      { label: "name", content: order.name, color: Colors.BLUE, id: order._id },
      { label: "email", content: order.email, color: Colors.BLUE, id: order._id },
      { label: "phone", content: order.phone, color: Colors.BLUE, id: order._id },
      { label: "mask type", content: order.masks.maskType, color: Colors.BLUE, id: order._id },
      { label: "amunt", content: order.masks.amount, color: Colors.BLUE, id: order._id },
      { label: "total price", content: order.totalPrice, color: Colors.BLUE, id: order._id },
      {
        label: "address",
        content:
          order.address.city +
          ", " +
          order.address.street +
          " " +
          order.address.number,
        color: Colors.BLUE,
      },
      { label: "createdAt", content: order.createdAt, color: Colors.BLUE }
    ];

    return res;
  };

  createOrders = () => {
    let orders = null;
    if (this.props.orders) {
      orders = this.props.orders.map((order) => {
        let details = this.createDetailsForOrderSummery(order);
        return <OrderSummery key={order._id} details={details}/>
      });
    }
    return  orders;
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
      <div className={classes.Orders}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
