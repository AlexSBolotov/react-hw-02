import PropTypes from "prop-types";

const CounterEl = ({ value }) => {
  return <span>{value}</span>;
};

CounterEl.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterEl;
