import { createSlice } from '@reduxjs/toolkit';
import contactsInitialState from '../data.json';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: { contacts: contactsInitialState },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContacts, removeContact } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contactList.contacts;
