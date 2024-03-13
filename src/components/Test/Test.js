import { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import CounterEl from "./Counter";

// const Button = ({ text, onBtbClick }) => (
//   <button type="button" onClick={onBtbClick}>
//     {text}
//   </button>
// );
// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   onBtbClick: PropTypes.func.isRequired,
// };
class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  static propTypes = {
    step: PropTypes.number.isRequired,
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue,
  };

  onIncClick = (e) => {
    this.setState((prevState, props) => {
      return { value: prevState.value + props.step };
    });
    console.log(`Increment by ${this.props.step}`);
  };
  onDecClick = (e) => {
    this.setState((prevState, props) => {
      return { value: prevState.value - props.step };
    });
    console.log(`Decrement by ${this.props.step}`);
  };

  render() {
    const { step } = this.props;
    return (
      <div>
        <CounterEl value={this.state.value} />
        <Button text={`Increment by ${step}`} onBtbClick={this.onIncClick} />
        <Button text={`Decrement by ${step}`} onBtbClick={this.onDecClick} />
      </div>
    );
  }
}
export default Counter;
