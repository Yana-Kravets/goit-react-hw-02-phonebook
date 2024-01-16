import React, { Component } from "react";

import { Container } from './App.styled';
import { nanoid } from 'nanoid'

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
  contacts: [],
  filter: ''
}

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; 

  handleSubmit = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
  
    const isExist = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );
  
    if (isExist) {
      alert(
        `${newContact.name} or ${newContact.number} is already in contacts`
      );
    } else {
      this.setState({ contacts: [newContact, ...this.state.contacts] });
    }
  };


  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

