import React, { Component } from "react";
import classes from "./Orders.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import OrderSummery from "./OrderSummery/OrderInfo";
import Filter from "./Filter/Filter";
import Pagination from '../../components/Pagination/Pagination';

class Orders extends Component {
  state = {
    orders: null,
    filter: null,
  };

  componentDidMount() {
    // console.log("[Ordres] componentDidMount");
    this.props.fetchOrders();
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
  };

  createFilter = () => {
    return <Filter filter={this.filterOrdersHandler} />;
  };

  pageClickedHandler = (currentPage) => {
        let filter  = {...this.props.filter};
      if(filter === null){
        filter = {currentPage: currentPage};
      }else{
        filter['currentPage'] = currentPage;
      }

      console.log(filter);
      this.props.fetchOrders(filter);
  }

  render() {
    // console.log("[Orders] render");
    const orders = this.createOrders();
    const filter = this.createFilter();
    const pages = this.props.orders ? <Pagination clicked={this.pageClickedHandler} max={this.props.max}/> : null;
    const ordersPage = (
      <div className={classes.OrdersPage}>
        {filter}
        {orders}
        {pages}
      </div>
    );
    return ordersPage;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    max: state.maxPages,
    filter: state.filter
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
