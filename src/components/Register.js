import React from "react";
import PropTypes from "prop-types";
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
      <form className="register" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChangeEventHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChangeEventHandler}
        />
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={this.state.passwordConfirmation}
          onChange={this.onPasswordConfirmationChangeEventHandler}
        />
        <button type="submit">Daftar</button>
      </form>
    );
  }
}

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default Register;
