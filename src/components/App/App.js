import React, { Component } from "react";
import "./App.css";
import ContactsList from "../ContactsList/ContactsList";
import Section from "../Section/Section";
import { nanoid } from "nanoid";
import stateData from './contacts.json';
import Phonebook from "../Phonebook/Phonebook";
import Filter from "../Filter/Filter";

// console.log(data);

class App extends Component {
  state = {
    contacts: stateData,
    filter: "",
  };

  checkedName = (name) => {
    this.state.contacts.find(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.checkedName(name)
      ? alert(`${name} is already in contacts!`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts].filter((contact) => contact.id !== id),
      };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
   return (
      <div>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          {
            <ContactsList
              filterContact={this.filterContact()}
              deleteContact={this.deleteContact}
            />
          }
        </Section>
      </div>
    );
  }
}

export default App;
