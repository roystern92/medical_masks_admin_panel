import React, { Component } from "react";
import classes from "./OrderInfo.module.css";
import Detail from "./Detail/Detail";
import Button from "../Filter/Button/Button";
import Colors from "../../../shared/Colors/Colors";
/*
        Props:
         1. details : Get an array of objects that must be in the next format:
            [{label: , content: , color: }, ...]
         2.edit   
 */

class OrderInfo extends Component {
  state = {
    editing: false,
    showInfo: false,
  };

  componentDidMount() {
    // console.log("[OrderSummery] componentDidMount");
  }

  createDetails = () => {
    let details = this.createDetailsForOrderSummery(this.props.order);
    return details.map((detail) => {
      return <Detail key={detail.id + detail.label} info={detail} />;
    });
  };

  createStatusDetails = (order) => {
    const { open, process, closed } = order.status;
    let res;
    if (open) {
      res = {
        label: "status",
        content: "Open",
        color: Colors.GREEN,
        id: order._id,
      };
    } else if (closed) {
      res = {
        label: "status",
        content: "Closed",
        color: Colors.RED,
        id: order._id,
      };
    } else if(process) {
      res = {
        label: "status",
        content: "In-process",
        color: Colors.ORANGE,
        id: order._id,
      }}
      else{
          res = {
            label: "status",
            content: "error, status is not valid.",
            color: Colors.ORANGE,
            id: 'error, status is not valid.',
          }
      }
      return res;
    }

  createDetailsForOrderSummery = (order) => {
    let status = this.createStatusDetails(order);
    let createAt = new Date(order.createdAt);
    createAt = createAt.toLocaleString();
    let res = [
      status,
      { label: "name", content: order.name, color: Colors.BLUE, id: order._id },
      { label: "createdAt", content: createAt, color: Colors.BLACK, id: order._id }
    ];

    if(this.state.showInfo){
      const address = order.address.street + " " + order.address.number + ", " + order.address.city ;
      res = [
        status,
        { label: "name", content: order.name, color: Colors.BLUE, id: order._id },
        { label: "mask type", content: order.masks.maskType, color: Colors.PURPLE, id: order._id },
        { label: "amount", content: order.masks.amount, color: Colors.PURPLE, id: order._id },
        { label: "address", content: address, color: Colors.PURPLE, id: order._id },
        { label: "contact", content: order.communication, color: Colors.PURPLE, id: order._id },
        { label: "createdAt", content: createAt, color: Colors.BLACK, id: order._id },
        { label: "updatedBy", content: order.updatedBy, color: Colors.BLACK, id: order._id }
      ];
    }
    return res;
  };

  render() {
    const details = this.createDetails();
    return (
      <div className={classes.OrderSummery}>
        <div className={classes.EditButton}>
          <Button
            title="Edit"
            color={Colors.BLUE}
            clicked={(event) => {
              this.props.edit(this.props.order);
            }}
          />

          <Button
            title="Info"
            color={Colors.LIGHTGREY}
            clicked={(event) => {
              event.preventDefault();
              console.log("more info");
              let showInfo = !this.state.showInfo;
              this.setState({showInfo: showInfo});
            }}
          />
        </div>

        {details}
      </div>
    );
  }
}

export default OrderInfo;
