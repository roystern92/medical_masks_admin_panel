import React, { Component } from "react";
import classes from "./Filter.module.css";
import Logo from "../../../components/Logo/Logo";
import Button from "./Button/Button";
import Colors from "../../../shared/Colors/Colors";


class Filter extends Component {
  state = {
    value: ''
  };

  resetFilter = (event) => {
    event.preventDefault();
    console.log("reset the search bar.");
  };


  onInputChangeHandler = (event) => {
    this.setState({ value: event.target.value });
  };



  render() {
    let placeholder = '{"filter" : "example"}';
    return (
      <div className={classes.Filterbar}>
        <div className={classes.Filter}>
          <div className={classes.Logo}>
            <Logo label="FILTER" />
          </div>
          <div className={classes.Search}>
            <input onChange={this.onInputChangeHandler} type="text" placeholder={placeholder} value={this.value} />
          </div>
        </div>

        <Button
          title="Filter"
          color={Colors.GREEN}
          clicked={(event) => {
            event.preventDefault()
            console.log(this.state.value);
            this.props.filter(this.state.value);
          }}
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

export default Filter;
