import { Component } from "react";
import shortid from "shortid";

const INITIAL_VALUES = {
  label: "",
  status: false,
};

export class TodoEditor extends Component {
  state = {
    ...INITIAL_VALUES,
  };
  handlerOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(value);
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };
  handlerFormSubmit = (e) => {
    e.preventDefault();

    this.props.onAddFormSubmit({ ...this.state, id: shortid.generate() });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_VALUES });
  };
  render() {
    const { label, status } = this.state;
    return (
      <form onSubmit={this.handlerFormSubmit}>
        <label>Entet task to do: </label>
        <input
          type="text"
          name="label"
          placeholder="Enter task"
          value={label}
          onChange={this.handlerOnChange}
        />

        <p>Is task already completed?</p>
        <label>Yes</label>
        <input
          type="checkbox"
          name="status"
          checked={status}
          onChange={this.handlerOnChange}
        />
        <button type="submit">Add new task</button>
      </form>
    );
  }
}
