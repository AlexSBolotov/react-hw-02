import { Component } from "react";
const INITIAL_VALUES = {
  login: "",
  email: "",
  password: "",
};
export class FormTest extends Component {
  state = {
    ...INITIAL_VALUES,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const { login, email, password } = form.elements;
    // const userName = login.value;
    // const userEmail = email.value;
    // const userPass = password.value;
    // this.setState({});
    console.log({ ...this.state });
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_VALUES });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="login"
            placeholder="Enter login"
            autoComplete="off"
            value={this.state.login}
            onChange={this.handleOnChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
