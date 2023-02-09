import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilterField } from '../../redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterField);

  const getVisibleContacts = () => {
    const normalized = contactFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
