// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (name, number) => {
    if (checkDoubleContact(name)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContacts(newContact));
  };

  const checkDoubleContact = name => {
    return contacts.find(contact => contact.name === name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
    // onSubmit({ name, number }, reset);
  };

  //   const reset = () => {
  //     setName('');
  //     setNumber('');
  //   };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// ==============================================================================
// export class OldContactForm extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func.isRequired,
//     }

//     state = {
//         name: '',
//         number: '',
//     }

//     handleInputChange = (e) => {
//         this.setState({[e.currentTarget.name]: e.currentTarget.value})
//     }

// handleSubmit = e => {
//     e.preventDefault()
//     this.props.onSubmit(this.state, this.reset)
// }

// reset = () => {
//     this.setState({name: '', number: '',})
// }

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <Label>Name
//                     <Input
//                         onChange={this.handleInputChange}
//                         value={this.state.name}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                 </Label>
//                 <Label>Number
//                     <Input
//                         onChange={this.handleInputChange}
//                         value={this.state.number}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                 </Label>
//                 <Button>Add contact</Button>
//             </Form>
//         )
//     }
// }
