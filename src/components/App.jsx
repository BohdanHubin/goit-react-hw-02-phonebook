import React, { Component } from 'react';

import style from './App.module.css';
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

addContact = ({ name, number }) => {

  const normalizedName = name.toLowerCase();

    let isAdd = false;
    this.state.contacts.forEach(element => {
      if (element.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdd = true;
      }
    });

    if (isAdd) {
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }; 

  deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  
  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div className={style.container}> 
       <h1>Phonebook</h1>  
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList onDeleteContact={this.deleteContact} contacts={visibleContacts}/>
      </div>)
}
}

export default App