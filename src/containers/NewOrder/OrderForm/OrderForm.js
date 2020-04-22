import React, { Component } from "react";
import classes from "./OrderForm.module.css";
import {
getCreateOrderControls, controlsTypes,
} from "../../../shared/Controls/newOrder";
import {
  checkValidity,
  createArrayFromObject,
} from "../../../shared/Util/Util";
import Input from "./Input/Input";
import axios from "../../../axios/axios";

export default class OrderForm extends Component {

  state = {
    controls: getCreateOrderControls(),
    valid: false
  };

  componentDidMount() {
    console.log("[OrderForm] componentDidMount");
  }

  checkIfFormIsValid = () => {
    let isValid = true;
    for (let key in this.state.controls) {
      if (!this.state.controls[key].valid) {
        isValid = false;
      }
    }
    if (this.state.valid !== isValid) {
      this.setState({ valid: isValid });
    }
  };

  onInputChangeHandler = (event, controlName) => {
    let updated = { ...this.state.controls };
    let control = updated[controlName];
    control["value"] = event.target.value;
    control["valid"] = checkValidity(
      event.target.value,
      this.state.controls[controlName].validation
    );
    control["touched"] = true;
    updated[controlName] = control;

    this.setState({ controls: updated }, this.checkIfFormIsValid);
  };

 

  createInputs = (controlType) => {
    let arrayControls = createArrayFromObject(this.state.controls);
    let cortrols = arrayControls.filter((el) => el.config.type === controlType);
    const inputs = cortrols.map((el) => {
      const {
        id,
        config: {
          elementType,
          valid,
          touched,
          validation,
          elementConfig,
          label,
          value,
        },
      } = el;

      return (
        <Input
          elementType={elementType}
          label={label}
          key={id}
          invalid={!valid}
          touched={touched}
          shouldValidate={validation}
          elementConfig={elementConfig}
          value={value}
          changed={(event) => this.onInputChangeHandler(event, id)}
        />
      );
    });
    return inputs;
  };

  createAdressInputs = () => {
    const inputs = this.createInputs(controlsTypes.ADDRESS);
    const address = <div className={classes.Address}>{inputs}</div>;
    return address;
  };

  submitHandler = (event) => {
    const controls = {...this.state.controls};
    const data = {
      name: controls.FullName.value,
      city: controls.City.value,
      street: controls.Street.value,
      streetNumber: controls.Number.value,
      maskType: 'Disposable Facamask',
      amount: controls.Amount.value,
      communication: controls.Communication.value
    };
    const url = '/admin/order';
    axios.post(url, data);
  };

  createSubmitButton = () => {
    const submit = (
      <div className={classes.Submit}>
        <button onClick={(event) => this.submitHandler(event)}>שלח</button>
      </div>
    );
    return submit;
  };

  render() {
    const address = this.createAdressInputs();
    const fullName = this.createInputs(controlsTypes.FULLNAME);
    const communication = this.createInputs(controlsTypes.COMMUNICATION);
    const tilte = <h1>להזמנה ופרטים נוספים</h1>;
    const submit = this.createSubmitButton();

    const form = (
      <form className={classes.OrderForm}>
        {tilte}
        {fullName}
        {address}
        {communication}
        {submit}
      </form>
    );
    return form;
  }
}
