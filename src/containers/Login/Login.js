import React, { Component } from "react";
import classes from "./Login.module.css";
import { checkValidity, createArrayFromObject } from "../../shared/Util/Util";
import Title from "../../components/UI/Title/Title";
import { getLoginControls } from "../../shared/Controls/login";
import Colors from "../../shared/Colors/Colors";
import Sizes from "../../shared/Sizes/Sizes";
import Inputs from "../../components/UI/Inputs/Inputs";
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from "../../components/UI/Button/Button";
import axios from '../../axios/axios';
import withErrorHandler from  '../withErrorHandler/withErrorHandler';

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Login extends Component {
  state = {
    controls: getLoginControls(),
    formIsValid: false,
    error: false,
    loading: false
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
    const {Email, Password} = this.state.controls;
    this.props.onAuth(Email.value, Password.value);
  };

  createForm = (elements) => {
    const title = (
      <Title title="Login" color={Colors.DARKGREY} size={Sizes.MEDIUM} />
    );
    const inputs = (
      <Inputs change={this.onInputChangeHandler} elements={elements} />
    );
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
    const login = this.props.loading ? 
    <div className={classes.Downloader}>
      {form}
      <Spinner />
      </div> : 
      <div className={classes.Downloader}>{form}</div>;

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

export default connect(mapStatesToProps, mapDispatchToProps)(withErrorHandler(Login, axios));
