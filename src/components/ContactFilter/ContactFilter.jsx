// import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

export const ContactFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        title="Find contacts by name"
      />
    </Label>
  );
};

// ContactFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
