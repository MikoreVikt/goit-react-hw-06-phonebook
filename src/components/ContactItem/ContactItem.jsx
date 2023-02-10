import PropTypes from 'prop-types';
import { Li, P, Btn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <P>
        {name}: {number}
      </P>
      <Btn onClick={() => dispatch(removeContact(id))}>Delete</Btn>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
