import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onPasswordChangeEventHandler =
    this.onPasswordChangeEventHandler.bind(this);
    this.onPasswordConfirmationChangeEventHandler =
    this.onPasswordConfirmationChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeEventHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onPasswordConfirmationChangeEventHandler(event) {
    this.setState(() => {
      return {
        passwordConfirmation: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.password !== this.state.passwordConfirmation) {
      alert("Password and password confirmation must be the same");
      return;
    } else {
      this.props.addUser(this.state);
    }
  }

  render() {
    return (
      <>
      <div className="login-register">
      <div className="form-login">
      <img src="./forus.png" alt="forus logo" className="forus-logo"></img>
      <form onSubmit={this.onSubmitEventHandler}>
      <h2>Daftar</h2>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChangeEventHandler}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChangeEventHandler}
          required
        />
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={this.state.passwordConfirmation}
          onChange={this.onPasswordConfirmationChangeEventHandler}
          required
        />
        <button className="button-submit" type="submit">Daftar</button>
        <p>Sudah punya akun? <Link to="/login"><b>Masuk.</b></Link> </p>
      </form>
      </div>
      <div className="background-login-register">
      <img src="./ilustrasi.png" alt="ilustrasi diskusi"></img>
        <h2>Sampaikan aspirasi-mu disini!</h2>
      </div>
      </div>
      </>
    );
  }
}

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default Register;
