import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import classes from "./EditOrder.module.css";
import { connect } from "react-redux";
import {
  getEditOrderControls,
  controlsTypes,
} from "../../../shared/Controls/editOrder";
import {
  checkValidity,
  createArrayFromObject,
} from "../../../shared/Util/Util";
import Input from "./Input/Input";
import Button from "../../Orders/Filter/Button/Button";
import Colors from "../../../shared/Colors/Colors";
import { createStatusByKey } from "../../../shared/Types/status";
import Address from "../../../shared/Types/address";
import axios from "../../../axios/axios";
import Spinner from '../../../components/UI/Spinner/Spinner';

class EditOrder extends Component {
  state = {
    loading: false,
    controls: getEditOrderControls(),
    valid: false,
    error: false,
  };

  componentDidMount() {
    // console.log("[EditOrder] componentDidMount");
    if (this.props.OrderToEdit) {
      this.setControlsWithOrderValues();
    }
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

  // Make sure that when render the order for the first time I will see the original valus of the order

  setControlsWithOrderValues = () => {
    let updatedControls = { ...this.state.controls };
    const { name, address, status, communication } = this.props.OrderToEdit;
    updatedControls.FirstName.value = name.trim().split(" ")[0];
    updatedControls.LastName.value = name.split(" ")[1] ? name.trim().split(" ")[1] : " ";
    updatedControls.City.value = address.city;
    updatedControls.Street.value = address.street;
    updatedControls.Number.value = address.number;
    updatedControls.Communication.value = communication;
    if (status.open) {
      updatedControls.Status.value = "open";
    } else if (status.process) {
      updatedControls.Status.value = "process";
    } else {
      updatedControls.Status.value = "closed";
    }
    for (let key in updatedControls) {
      updatedControls[key].valid = checkValidity(
        updatedControls[key].value,
        this.state.controls[key].validation
      );
    }
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

  getInputs = (arrayControls, controlType, style) => {
    let controls = arrayControls.filter((el) => el.config.type === controlType);
    const inputs = this.createInputs(controls);
    const res = <div className={style}>{inputs}</div>;
    return res;
  };

  createDataForEditRequest = () => {
    const controls = this.state.controls;
    const status = createStatusByKey(controls.Status.value);
    const address = new Address(
      controls.City.value,
      controls.Street.value,
      controls.Number.value
    );
    const fullName = controls.FirstName.value + " " + controls.LastName.value;
    const data = {
      address: address,
      name: fullName,
      communication:controls.Communication.value,
      status: status
    };
    // console.log(data);
    return data;
  };

  saveChanges = async () => {
    try {
      // console.log("Before editing....");
      const url = "/admin/order/edit/" + this.props.OrderToEdit._id;
      // console.log(url);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token").toString();
      const data = this.createDataForEditRequest();
      const res = await axios.put(url, data);
      // console.log(res.data.message);
    } catch (err) {
      // console.log("Error while trying to save the changes!");
      // console.log(err.response);
      alert("error");
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.valid) {
      this.setState({loading: true}, () => {
        this.saveChanges();
        setTimeout(() => {
          this.props.history.push('/orders');
        }, 1000)
      });
    }
  };


      getSubmitButton = () => {
        const submit = (
          <div className={classes.Submit}>
            <button onClick={(event) => this.submitHandler(event)}>Save</button>
          </div>
        );
        return submit;
      };
    

  getInputsWithDifftentTypesCombined = (
    arrayControls,
    firstInputConfig,
    secondInputConfig,
    style
  ) => {
    const first = this.getInputs(
      arrayControls,
      firstInputConfig.type,
      firstInputConfig.class
    );
    const second = this.getInputs(
      arrayControls,
      secondInputConfig.type,
      secondInputConfig.class
    );

    const res = (
      <div className={style}>
        {first}
        {second}
      </div>
    );
    return res;
  };

  createForm = () => {
    let arrayControls = createArrayFromObject(this.state.controls);
    const addressConfig = {
      type: controlsTypes.ADDRESS,
      class: classes.AddressInputs,
    };
    const statusConfig = {
      type: controlsTypes.STATUS,
      class: classes.Status,
    };
    const addressAndStatus = this.getInputsWithDifftentTypesCombined(
      arrayControls,
      addressConfig,
      statusConfig,
      classes.Address
    );
    const personalDeatails = this.getInputs(
      arrayControls,
      controlsTypes.FULLNAME,
      classes.PersonalDetails
    );
    const communication = this.getInputs(
      arrayControls,
      controlsTypes.COMMUNICATION,
      classes.Communication
    );
    const submit = this.getSubmitButton();

    const form = (
      <div className={classes.Order}>
        <form className={classes.Form}>
          {personalDeatails}
          {addressAndStatus}
          {communication}
          {submit}
        </form>
      </div>
    );
    return form;
  };

  render() {
    // console.log("[EditOrder] render");
    const form = this.createForm();
    const editOrder = !this.props.OrderToEdit ? null : form;
    return  this.state.loading ? <Spinner /> : editOrder;
  }
}
const mapStateToProps = (state) => {
  return {
    OrderToEdit: state.orderEdited,
  };
};

export default withRouter(connect(mapStateToProps)(EditOrder));
