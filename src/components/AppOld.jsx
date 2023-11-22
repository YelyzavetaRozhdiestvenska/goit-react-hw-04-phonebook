// import React, { Component } from 'react';
// import GlobalStyle from './GlobalStyle';
// import { ContactForm } from './contactForm/ContactForm';
// import { ContactList } from './contactList/ContactList';
// import { Filter } from './filter/Filter';
// import { Phonebook } from './App.styled';

// export class App extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidMount() {
//   const savedContacts = localStorage.getItem('contacts');
//   console.log(savedContacts);
//   if (savedContacts !== null) {
//     this.setState({
//       contacts: JSON.parse(savedContacts),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// addContact = newContact => {
//   if (this.state.contacts.find(contact => contact.name === newContact.name)) {
//     return alert(`${newContact.name} is already in contacts`);
//   }
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, newContact],
//   }));
// };

// getContact = e => {
//   const searchQuerry = e.currentTarget.value;
//   this.setState({ filter: searchQuerry });
// };

// handleDeleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// render() {
//   const { contacts, filter } = this.state;
// const getVisibleContact = contacts.filter(({ name }) =>
//   name.toLowerCase().includes(filter.toLocaleLowerCase())
// );
// return (
//   <Phonebook>
//     <h1>Phonebook</h1>
//     <ContactForm addContact={this.addContact}></ContactForm>
//     <h2>Contacts</h2>
//     <Filter filter={filter} filterContact={this.getContact} />
//     <ContactList
//       handleDelete={this.handleDeleteContact}
//       getVisibleContact={getVisibleContact}
//     />
//     <GlobalStyle />
//   </Phonebook>
// );
//   }
// }
