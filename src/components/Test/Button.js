import PropTypes from "prop-types";

const Button = ({ text, onBtbClick }) => (
  <button type="button" onClick={onBtbClick}>
    {text}
  </button>
);
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onBtbClick: PropTypes.func.isRequired,
};

export default Button;
