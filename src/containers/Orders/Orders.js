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
    console.log("[Ordres] componentDidMount");
    this.props.fetchOrders("false");
  }

  createStatusDetails = (order) => {
    const {open, process, closed} = order.status;
    let res;
    if(open){
      res = { label: "status", content: 'open', color: Colors.GREEN, id: order._id };
    }else if(closed){
      res = { label: "status", content: 'closed', color: Colors.RED, id: order._id };
    }else{
      res = { label: "status", content: 'process', color: Colors.ORANGE, id: order._id };
    }
    return res;
  }

  createDetailsForOrderSummery = (order) => {
    const res = [
      { label: "_id", content: order._id, color: Colors.RED, id: order._id},
      { label: "name", content: order.name, color: Colors.BLUE, id: order._id },
      { label: "email", content: order.email, color: Colors.BLUE, id: order._id },
      { label: "phone", content: order.phone, color: Colors.BLUE, id: order._id },
      { label: "mask type", content: order.masks.maskType, color: Colors.BLUE, id: order._id },
      { label: "amunt", content: order.masks.amount, color: Colors.BLUE, id: order._id },
      { label: "totalPrice", content: order.totalPrice, color: Colors.BLUE, id: order._id },
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

    res.push(this.createStatusDetails(order));

    return res;
  };

  editHandler = (order) => {
    console.log("trying to edit ");
    console.log(this.props);
    this.props.history.push('/edit');
    this.props.startEditOrder(order);
  };

  createOrders = () => {
    let orders = null;
    if (this.props.orders) {
      orders = this.props.orders.map((order) => {
        let details = this.createDetailsForOrderSummery(order);
        return <OrderSummery edit={this.editHandler} order={order} key={order._id} details={details}/>
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
    startEditOrder: (order) => { dispatch(actions.editOrder(order))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
