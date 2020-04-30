import React, { Component } from "react";
import classes from "./Login.module.css";
import { checkValidity, createArrayFromObject } from "../../shared/Util/Util";
import Title from "../../components/UI/Title/Title";
import { getLoginControls } from "../../shared/Controls/login";
import Colors from "../../shared/Colors/Colors";
import Sizes from "../../shared/Sizes/Sizes";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import axios from "../../axios/axios";
import withErrorHandler from "../withErrorHandler/withErrorHandler";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Login extends Component {
  state = {
    controls: getLoginControls(),
    formIsValid: false,
    error: false,
    loading: false,
    showPassword: false
  };

  componentDidMount() {
    // console.log("[Login] componentDidMount");
  }

  checkIfFormIsValid = () => {
    let isFormValid = true;
    for (let key in this.state.controls) {
      if (!this.state.controls[key].valid) {
        isFormValid = false;
      }
    }
    if (this.state.formIsValid !== isFormValid) {
      this.setState({ formIsValid: isFormValid });
    }
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

    if (field === "Spotify") {
      control["choices"] = {
        appleMusic: control.choices.appleMusic,
        spotify: !control.choices.spotify,
      };
    } else if (field === "Apple Music") {
      control["choices"] = {
        appleMusic: !control.choices.appleMusic,
        spotify: control.choices.spotify,
      };
    }

    this.setState({ controls: updated }, this.checkIfFormIsValid);
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { Email, Password } = this.state.controls;
    this.props.onAuth(Email.value, Password.value);
  };

  createInputs = () => {
    let arrayControls = createArrayFromObject(this.state.controls);
    const inputs = arrayControls.map((el) => {
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

    const res = (
      <div className={classes.Inputs}>
        {inputs}
        <input type="checkbox" checked={this.state.showPassword} onChange={this.showPasswordHandler} />
        <label >Show Password</label>
      </div>
    );
    return res;
  };

  showPasswordHandler = () => {
    let updatedControls = {...this.state.controls};
    let password = updatedControls.Password;
    if(!this.state.showPassword){
      console.log("fuck");
      password.elementConfig.type = 'text';
    }else{
      password.elementConfig.type = 'password';
    }
    updatedControls.Password = password;
    this.setState({showPassword: !this.state.showPassword, controls: updatedControls});
  }

  createForm = () => {
    const title = (
      <Title title="Login" color={Colors.DARKGREY} size={Sizes.MEDIUM} />
    );
    const inputs = this.createInputs();

    const submit = (
      <Button
        clicked={this.submitHandler}
        title="login"
        color={Colors.LIGHTGREY}
        size={Sizes.SMALL}
      />
    );
    const form = (
      <form className={classes.Form}>
        {title}
        {inputs}
        {submit}
      </form>
    );
    return form;
  };

  render() {
    // console.log("[Login] render");
    let elements = createArrayFromObject(this.state.controls);
    let form = this.createForm(elements);
    const login = this.props.loading ? (
      <div className={classes.Downloader}>
        {form}
        <Spinner />
      </div>
    ) : (
      <div className={classes.Downloader}>{form}</div>
    );

    return login;
  }
}

const mapStatesToProps = (state) => {
  return {
    loading: state.loading,
    token: state.token,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onResetError: () => dispatch(actions.authResetError()),
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(withErrorHandler(Login, axios));
