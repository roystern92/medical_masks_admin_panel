import React, { Component } from "react";
import classes from "./OrderSummery.module.css";
import Detail from "./Detail/Detail";
import Button from "../Filter/Button/Button";
import Colors from '../../../shared/Colors/Colors';
/*
        Props:
         1. details : Get an array of objects that must be in the next format:
            [{label: , content: , color: }, ...]
         2.edit   
 */

class OrderSummery extends Component {
  state = {
    editing: false,
  };

  componentDidMount() {
    console.log("[OrderSummery] componentDidMount");
  }

  createDetails = () => {
    return this.props.details.map((detail) => {
      return <Detail key={detail.id + detail.label} info={detail} />;
    });
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
            event.preventDefault();
            console.log("editing");
            this.props.edit(this.props.order);
          }}
        />
          </div>
        
        {details}
      </div>
    );
  }
}

export default OrderSummery;
