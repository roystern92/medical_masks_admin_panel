import React, { Component } from "react";
import classes from "./Inputs.module.css";
import Input from "../Input/Input";

export default class Inputs extends Component {

  componentDidMount() {
  }
  

  createInputs = () => {
    let inputs = this.props.elements.map(formElement => {
      const {
        id,
        config: {
          value,
          elementType,
          valid,
          touched,
          validation,
          elementConfig,
          choices
        }
      } = formElement;

      return (
        <Input
          elementType={elementType}
          key={id}
          invalid={!valid}
          touched={touched}
          shouldValidate={validation}
          elementConfig={elementConfig}
          value={value}
          id={id}
          choices={choices}
          changed={event => this.props.change(event, id)}

        />
      );
    });
    return inputs;
  };

  render() {
    const inputs = this.createInputs();
    return <div className={classes.Inputs}>
        {inputs}
    </div>;
  }
}
