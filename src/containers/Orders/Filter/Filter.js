import React, { Component } from "react";
import classes from "./Filter.module.css";
import Button from "./Button/Button";
import Colors from "../../../shared/Colors/Colors";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Input from "../../Edit/EditOrder/Input/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filter extends Component {
  state = {
    status: {
      label: "Status",
      elementType: "select",
      elementConfig: {
        options: [
          { value: "open", displayValue: "Open" },
          { value: "process", displayValue: "Process" },
          { value: "closed", displayValue: "Closed" },
        ],
      },
      value: 'open'
    },

    from: new Date(),
    to: new Date(),
  };

  componentDidMount() {
    console.log("[Filter] cdm");
  }

  onDateChange = (key, date) => {
    let update = {};
    update[key] = date;
    this.setState(update);
  };

  onStatusChange = (event) => {
    this.setState({
      status: { ...this.state.status, value: event.target.value },
    });
  };

  createStatus = () => {
    const res = (
      <Input
        elementType="select"
        elementConfig={this.state.status.elementConfig}
        value={this.state.status.value}
        changed={(event) => this.onStatusChange(event)}
      />
    );
    return res;
  };

  createDatePickers = () => {
    const from = (
      <DatePicker
        className={classes.Date}
        selected={this.state.from}
        onChange={(date) => this.onDateChange("from", date)}
        showTimeSelect
      />
    );

    const to = (
      <DatePicker
        className={classes.Date}
        selected={this.state.to}
        onChange={(date) => this.onDateChange("to", date)}
        showTimeSelect
      />
    );

    const dates = (
      <div className={classes.Dates}>
        <div className={classes.Container}>
          <label>from: </label>
          {from}
        </div>

        <div className={classes.Container}>
          <label>to: </label>
          {to}
        </div>
      </div>
    );

    return dates;
  };

  filterHandler = (event) => {
    event.preventDefault();
    const filter = {
      hasFilter: true,
      status: this.state.status.value,
      from: this.state.from,
      to: this.state.to,
    };
      this.props.filter(filter);
  };

  render() {
    const status = this.createStatus();
    const dates = this.createDatePickers();
    const res = (
      <div className={classes.Filter}>
        {status}
        {dates}
        <Button
          title="Filter"
          color={Colors.GREEN}
          clicked={this.filterHandler}
        />
      </div>
    );
    return res;
  }
}

const mapStateToProps = (state) => {
  return {
    error: !!state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => {
      dispatch(actions.fetchOrders(" "));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
