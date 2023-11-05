import React, { Component } from 'react';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';
import { Phonebook } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  getContact = e => {
    this.getVisibleContact(e.target.value);
  };

  getVisibleContact = filterCriteria => {
    this.setState({
      filter: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterCriteria.toLowerCase())
      ),
    });
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  addContact = ({ name, number }) => {
    let newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.addName({ name, number });

    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  addName = ({ name, number }) => {
    this.setState({ name, number });
  };

  render() {
    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filterContact={this.getContact} />
        <ContactList
          handleDelete={this.handleDeleteContact}
          contacts={
            this.state.filter.length > 0
              ? this.state.filter
              : this.state.contacts
          }
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}
