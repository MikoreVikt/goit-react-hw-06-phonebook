import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Wrapper, Title } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactFilter />
      <ContactList />
    </Wrapper>
  );
};
