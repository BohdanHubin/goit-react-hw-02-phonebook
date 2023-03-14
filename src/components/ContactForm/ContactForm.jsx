import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    };
    
handleChange = name => event => {
    const { target } = event;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={style.inputName}
            value={this.state.name}
            onChange={this.handleChange('name')}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={style.inputNumber}
            value={this.state.number}
            onChange={this.handleChange('number')}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={style.buttonEditor}>
          Add contact
        </button>
      </form>
    );
  }    
}

export default ContactForm;