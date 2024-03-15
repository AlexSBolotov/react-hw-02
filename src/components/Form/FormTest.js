import { Component } from "react";
import shortid from "shortid";

const GENDER = {
  MALE: "male",
  FEMALE: "femail",
  NEITHER: "neither",
};
const INITIAL_VALUES = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  spam: false,
  gender: null,
  age: "",
};
export class FormTest extends Component {
  state = {
    ...INITIAL_VALUES,
  };

  formIds = {
    login: shortid.generate(),
    email: shortid.generate(),
    password: shortid.generate(),
    agreed: shortid.generate(),
    gender: shortid.generate(),
    age: shortid.generate(),
    spam: shortid.generate(),
  };
  handleOnChange = (e) => {
    const { type, name, value, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const { login, email, password } = form.elements;
    // const userName = login.value;
    // const userEmail = email.value;
    // const userPass = password.value;
    // this.setState({});
    this.props.onFormSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_VALUES });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label htmlFor={this.formIds.login}>Name</label>
        <input
          id={this.formIds.login}
          type="text"
          name="login"
          placeholder="Enter login"
          autoComplete="off"
          value={this.state.login}
          onChange={this.handleOnChange}
        />
        <label htmlFor={this.formIds.email}>Email</label>
        <input
          id={this.formIds.email}
          type="text"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <label htmlFor={this.formIds.password}>Password</label>
        <input
          id={this.formIds.password}
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <label htmlFor={this.formIds.agreed}>Agree to terms</label>
        <input
          id={this.formIds.agreed}
          type="checkbox"
          name="agreed"
          checked={this.state.agreed}
          onChange={this.handleOnChange}
        />
        <label htmlFor={this.formIds.spam}>Receive spam</label>
        <input
          id={this.formIds.spam}
          type="checkbox"
          name="spam"
          checked={this.state.spam}
          onChange={this.handleOnChange}
        />
        <section>
          <p>Choose your gender</p>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === GENDER.MALE}
              value={GENDER.MALE}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === GENDER.FEMALE}
              value={GENDER.FEMALE}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Prefer not to say
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === GENDER.NEITHER}
              value={GENDER.NEITHER}
              onChange={this.handleOnChange}
            />
          </label>
        </section>
        <label htmlFor={this.formIds.age}>Select your age</label>
        <select
          id={this.formIds.age}
          name="age"
          value={this.state.age}
          onChange={this.handleOnChange}
        >
          <option value="" disabled>
            . . .
          </option>
          <option value="0-14">0-14</option>
          <option value="14-25">14-25</option>
          <option value="25-45">25-45</option>
          <option value="45+">45+</option>
        </select>

        <button type="submit" disabled={!this.state.agreed}>
          Submit
        </button>
      </form>
    );
  }
}
