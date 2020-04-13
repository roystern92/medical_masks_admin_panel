import React, { Component } from "react";
import classes from "./EditOrder.module.css";
import { connect } from "react-redux";
import { editOrderControls } from "../../../shared/Controls/controls";
import {
  checkValidity,
  createArrayFromObject,
} from "../../../shared/Util/Util";
import Input from "./Input/Input";
import Button from "../Filter/Button/Button";
import Colors from "../../../shared/Colors/Colors";

class EditOrder extends Component {
  state = {
    controls: editOrderControls,
    valid: false,
    error: false,
  };

  componentDidMount() {
    console.log("[EditOrder] componentDidMount");
    if(this.props.OrderToEdit){
      this.setControlsWithOrderValues();
    };
  }

  setControlsWithOrderValues = () => {
    let updatedControls = { ...this.state.controls };
    const {name, address, status, communication} = this.props.OrderToEdit;
    updatedControls.FirstName.value = name.split(' ')[0];
    updatedControls.LastName.value = name.split(' ')[1];
    updatedControls.City.value = address.city;
    updatedControls.Street.value = address.street;
    updatedControls.Number.value = address.number;
    updatedControls.Communication.value = communication;
    if(status.open){
      updatedControls.Status.value = 'open';
    }else if(status.process){
      updatedControls.Status.value = 'process';
    }else {
      updatedControls.Status.value = 'closed';
    }

    console.log(updatedControls);
    this.setState({ controls: updatedControls }, this.checkIfFormIsValid);
  };

  onInputChangeHandler = (event, controlName) => {
    let updated = { ...this.state.controls };
    let control = updated[controlName];
    let field = event.target.name;
    control["value"] = event.target.value;
    control["valid"] = checkValidity(
      event.target.value,
      this.state.controls[controlName].validation
    );
    control["touched"] = true;
    updated[controlName] = control;

    this.setState({ controls: updated }, this.checkIfFormIsValid);
  };

  createInputs = (controls) => {
    const inputs = controls.map((el) => {
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

  getPersonalDetailsInputs = (arrayControls) => {
    let controls = arrayControls.filter(
      (el) =>
        el.id.toLowerCase() === "firstname" ||
        el.id.toLowerCase() === "lastname"
    );
    const inputs = this.createInputs(controls);
    const res = <div className={classes.PersonalDetails}> {inputs}</div>;
    return res;
  };

  getAddressInputs = (arrayControls) => {
    let controls = arrayControls.filter(
      (el) =>
        el.id !== "FirstName" &&
        el.id !== "LastName" &&
        el.id !== "Status" &&
        el.id !== "Communication"
    );
    const inputs = this.createInputs(controls);
    const res = <div className={classes.AddressInputs}>{inputs}</div>;
    return res;
  };
  getStatussInputs = (arrayControls) => {
    let controls = arrayControls.filter((el) => el.id === "Status");
    const inputs = this.createInputs(controls);
    const res = <div className={classes.Status}>{inputs}</div>;
    return res;
  };

  cgetCommunicationInput = (arrayControls) => {
    let controls = arrayControls.filter((el) => el.id === "Communication");
    const inputs = this.createInputs(controls);
    const res = <div className={classes.Communication}>{inputs}</div>;
    return res;
  };
  createForm = () => {
    let arrayControls = createArrayFromObject(this.state.controls);
    const personalDeatails = this.getPersonalDetailsInputs(arrayControls);
    const address = this.getAddressInputs(arrayControls);
    const status = this.getStatussInputs(arrayControls);
    const communication = this.cgetCommunicationInput(arrayControls);
    const submit = (
      <div className={classes.Submit}>
        <Button
          title="Save"
          color={Colors.GREEN}
          clicked={(event) => {
            event.preventDefault();
            console.log("saving the changes....");
          }}
        />
      </div>
    );

    const form = (
      <div className={classes.Order}>
        <form className={classes.Form}>
          {personalDeatails}
          <div className={classes.Address}>
            {address}
            {status}
          </div>
          {communication}
          {submit}
        </form>
      </div>
    );
    return form;
  };

  render() {
    console.log("[EditOrder] render");
    const form = this.createForm();
    const editOrder = !this.props.OrderToEdit ? null : form;
    return editOrder;
  }
}
const mapStateToProps = (state) => {
  return {
    OrderToEdit: state.orderEdited,
  };
};

export default connect(mapStateToProps)(EditOrder);
