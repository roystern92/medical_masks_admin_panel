import React, { Component } from "react";
import classes from "./Filter.module.css";
import Logo from "../../../components/Logo/Logo";
import Button from "./Button/Button";
import Colors from "../../../shared/Colors/Colors";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Filter extends Component {
  state = {
    value: "",
    first: true,
  };

  resetFilter = (event) => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.setState({ value: "", first: true });
      this.props.fetchOrders();
      console.log("reset the search bar.");
    }
  };

  filterHandler = (event) => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.props.filter(this.state.value);
    }
  };

  onInputChangeHandler = (event) => {
    let value = event.target.value.toString().trim();
    let valueWithFormat;
    console.log(value.length);
    if (value.length !== 0) {
      if (this.state.first || (value.length === 1 && value !== "{")) {
        valueWithFormat = '{"' + value + '":""}'.trim();
        this.setState({ value: valueWithFormat, first: false });
      } else {
        this.setState({ value: value });
      }
    } else {
      valueWithFormat = "";
      if (!this.state.first) {
        this.setState({ value: valueWithFormat, first: true });
        this.props.fetchOrders();
      } else {
        this.setState({ value: valueWithFormat });
      }
    }
  };

  render() {
    console.log("[Filter] render");
    let placeholder = '{"filter" : "example"}';
    return (
      <div className={classes.Filterbar}>
        <div className={classes.Filter}>
          <div className={classes.Logo}>
            <Logo label="FILTER" />
          </div>
          <div className={classes.Search}>
            <input
              onChange={this.onInputChangeHandler}
              type="text"
              placeholder={placeholder}
              value={this.state.value}
            />
          </div>
        </div>

        <Button
          title="Filter"
          color={Colors.GREEN}
          clicked={this.filterHandler}
        />

        <Button
          title="Reset"
          color={Colors.LIGHTGREY}
          clicked={this.resetFilter}
        />
      </div>
    );
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
