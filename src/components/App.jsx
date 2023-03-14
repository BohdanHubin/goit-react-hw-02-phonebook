import React, { Component } from 'react';

import style from './App.module.css';
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm';

class App extends Component {

state = {
  contacts: [],
  filter: ''
}

addContact = ({ name, number }) => {

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }; 
  
  render() {
    return (
      <div className={style.container}> 
       <h1>Phonebook</h1>  
        <ContactForm onSubmit={this.addContact} />
      </div>)
}
}

export default App
