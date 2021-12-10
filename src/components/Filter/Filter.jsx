import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ handleChange, filter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
