import React, { Component, Fragment } from "react";
import classes from "./withErrorHandler.module.css";
import Modal from "../Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      message: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => {
          console.log(res);
          this.setState({ message: res.data.message });
        },
        (error) => {
          console.log(error.response.data.message);
          this.setState({ error: error, message: error.response.data.message });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null, message: null });
      window.location = "";
    };

    render() {
      let msg = 'הזמנתך נקלטה במערכת, ניצור עמך קשר בהקדם.';

      if(this.state.message && this.state.error){
        msg = 'Unfortunately the site is down for a bit of maintenance right now.';
      }
      let errorMessage =
        !this.state.error & !this.state.message ? null : (
          <div className={classes.Error}>
            <h1>{msg}</h1>
            <button onClick={this.errorConfirmedHandler}>סיים</button>
          </div>
        );
      return (
        <Fragment>
          <Modal
            show={this.state.error || this.state.message}
            modalClosed={this.errorConfirmedHandler}
          >
            {errorMessage}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
