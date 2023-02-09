import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { Label, Input } from './ContactFilter.styled';

export const ContactFilter = () => {
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
