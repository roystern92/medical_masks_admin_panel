import React, { Component } from "react";
import classes from "./EditOrder.module.css";
import { connect } from "react-redux";
import { editOrderControls } from "../../../shared/Controls/controls";
import {
  checkValidity,
  createArrayFromObject,
} from "../../../shared/Util/Util";
import Input from "./Input/Input";

class EditOrder extends Component {
  state = {
    controls: editOrderControls,
    valid: false,
    error: false,
  };

  componentDidMount() {
    console.log("[EditOrder] componentDidMount");
  }

  // />
  getPersonalDetailsInputs = (arrayControls) => {
    let controls = arrayControls.filter(
      (el) => el.id === "Email" || el.id === "Phone"
    );
    console.log(controls);
    let inputs = controls.map((el) => {
      const {
        id,
        config: {
          value,
          elementType,
          valid,
          touched,
          validation,
          elementConfig,
        },
      } = el;

      return <Input
                elementType={elementType}
                label={id}
                key={id}
                invalid={!valid}
                touched={touched}
                shouldValidate={validation}
                elementConfig={elementConfig}
                value={value}
                changed={(event) => this.onInputChangeHandler(event, id)}
            />
    });
    const res = <div className={classes.PersonalDetails}> {inputs}</div>
    return res;
  };

  getAddressInputs = (arrayControls) => {
    const res = <div className={classes.Address}></div>;
    return res;
  };
  getStatussInputs = (arrayControls) => {
    const res = <div className={classes.Status}></div>;
    return res;
  };
  createForm = () => {
    let arrayControls = createArrayFromObject(this.state.controls);
    console.log(arrayControls);
    const personalDeatails = this.getPersonalDetailsInputs(arrayControls);
    // const address = this.getAddressInputs(arrayControls);
    // const status = this.getStatussInputs(arrayControls);
    const form = <form className={classes.Form}>{personalDeatails}</form>;
    return form;
  };

  createEditOrder = () => {
    const form = this.createForm();
    const res = <div className={classes.EditOrder}>{form}</div>;
    return res;
  };

  render() {
    console.log("[EditOrder] render");
    const editOrder = !this.props.OrderToEdit ? null : this.createEditOrder();
    return editOrder;
  }
}
const mapStateToProps = (state) => {
  return {
    OrderToEdit: state.orderEdited,
  };
};

export default connect(mapStateToProps)(EditOrder);
