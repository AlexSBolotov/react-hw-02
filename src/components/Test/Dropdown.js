import { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    isShown: false,
  };

  show = () => {
    this.setState({ isShown: true });
  };
  hide = () => {
    this.setState({ isShown: false });
  };
  render() {
    return (
      <div className="dropdown">
        <button type="button" className="button" onClick={this.show}>
          Show
        </button>
        <button type="button" className="button" onClick={this.hide}>
          Hide
        </button>
        {this.state.isShown && <div className="menu">Dropdown Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
