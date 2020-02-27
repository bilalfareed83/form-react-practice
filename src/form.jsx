import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  submitForm = () => {
    event.preventDefault();
    if (this.state.username === 'bilal' && this.state.password === '123') {
      alert(`You are logged in ${this.state.username}`);
      this.setState({
        username: '',
        password: ''
      });
    } else {
      alert(`Please enter valid username or password`);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handlerChange}
          />
          <br />
          <br />
          <label>Passwrod: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlerChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
