import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Phonebook } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  // Запись contacts в localeStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const getContact = e => {
    const searchQuerry = e.currentTarget.value;
    setFilter({ filter: searchQuerry });
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const getVisibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} filterContact={getContact} />
      <ContactList
        handleDelete={handleDeleteContact}
        getVisibleContact={getVisibleContact}
      />
      <GlobalStyle />
    </Phonebook>
  );
};
