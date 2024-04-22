import './App.css'
import { useState, useEffect } from 'react';
import ContactList from './Contacts/ContactList';
import SearchBox from './Search/SearchBox';
import ContactForm from "./Form/ContactForm"
import Notification from './Notification/Notification';
import Resetbutton from './Notification/Reset';

const standartContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if(savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return []});
  const [filter, setFilter] = useState('');
    
  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const resetContacts = () => {
    setContacts(standartContacts);
  }

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAdd = {addContacts}
      />
      <SearchBox
        value = {filter}
        onFilter = {setFilter}
      />
  {visibleContacts.length === 0 ? (
    contacts.length !== 0 ? (
      <Notification text = {"There are no contacts matching your request."}/>) :
      <>
        <Notification text = {"There are no contacts yet, but you can add new one's!"}/>
        <Resetbutton reset = {resetContacts}/>
      </>
    ) : <ContactList
        contacts = {visibleContacts}
        onDelete = {deleteContacts}
      />
}
    </div>)
}
export default App;

