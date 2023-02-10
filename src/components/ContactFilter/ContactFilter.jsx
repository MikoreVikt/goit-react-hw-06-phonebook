import { Label, Input } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilterContact } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e =>
    dispatch(setFilterContact(e.currentTarget.value));

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
