import React, { Component } from "react";
import classes from "./Orders.module.css";
import OrderSummery from "./OrderSummery/OrderSummery";
import Colors from "../../shared/Colors/Colors";
import detail from "./OrderSummery/Detail/Detail";
import axios from '../../axios/axios';
import Filter from './Filter/Filter';

class Orders extends Component {
  state = {
    orders: null,
    filter: null
  };

  componentDidMount () {
    // Get all the orders from server
    this.getOrdersFromServer()

  }

  getOrdersFromServer  = async () => {
    try{

    }catch(err){

    }
  };

  /*
        I want to give the user an option to filter the results
        1.Serch bar of name or email.
        2.Filter by order status.

        At first the client will get all the orders in system
        and then if he wants to he can ask for filter.
    */

  createOrders = () => {
    // let details = 
    // let orders;
    
    // [
    //   { label: "_id:", content: "2165151351355", color: Colors.RED },
    //   { label: "name:", content: "roy stern", color: Colors.RED },
    //   { label: "email:", content: "roystern92@gmail.com", color: Colors.RED },
    //   { label: "city:", content: "תל אביב", color: Colors.BLUE },
    //   { label: "street:", content: "ראובן רובין ", color: Colors.BLUE },
    //   { label: "number:", content: "12", color: Colors.BLUE },
    // ];
      

    // return ;
  };

  createFilter = () => {
   return <Filter />;
  };

  render() {
    const orders = this.createOrders();
    const filter = this.createFilter();
    const ordersPage =
     <div className={classes.Orders}>
         {filter}
        {orders}
    </div>
    return ordersPage;
  }
}

export default Orders;
