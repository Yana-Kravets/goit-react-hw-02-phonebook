import propTypes from 'prop-types';
import React, { Component } from "react";

import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

   handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.handleSubmit(this.state);
      this.reset();
   };

    reset = () => {
      this.setState({ name: '', number: '' });
    };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
            Name 
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </Label>
        <Label>Number 
            <Input
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </Label>
        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};

