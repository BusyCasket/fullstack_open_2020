import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Person from './Person';
import Notification from './Notification';
import personService from '../services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    console.log('effect');
    personService.getAll().then((initialEntries) => {
      setPersons(initialEntries);
    });
  }, []);

  const setName = (e) => setNewName(e.target.value);
  const setNumber = (e) => setNewNumber(e.target.value);
  const setSearch = (e) => setSearchName(e.target.value);

  const notify = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    const newEntry = {
      name: newName,
      number: newNumber,
    };
    if ([...persons].findIndex((entry) => entry.name === newName) !== -1) {
      const index = [...persons].findIndex((entry) => entry.name === newName);
      const id = [...persons][index].id;
      if (window.confirm(`${newName} is already added to phonebook. Update Number?`)) {
        personService
          .update(id, newEntry)
          .then((returnedEntry) => setPersons(persons.map((person) => (person.id !== id ? person : returnedEntry))))
          .catch((error) => {
            notify(`${newEntry.name} was already deleted from your contacts.`, 'error');
            setPersons(persons.filter((p) => p.id !== id));
          });
        notify(`Updated ${newEntry.name}'s number to: ${newEntry.number}`, 'success');
        setNewName('');
        setNewNumber('');
      }
    } else {
      personService.create(newEntry).then((returnedEntry) => setPersons(persons.concat(returnedEntry)));
      notify(`${newEntry.name} was added to the phonebook!`, 'success');
      setNewName('');
      setNewNumber('');
    }
  };

  const deleteEntry = (id) => {
    const entry = [...persons].find((p) => p.id === id);
    const r = window.confirm('delete entry?');
    if (r) {
      personService
        .deleteEntry(id)
        .then((response) => setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => {
          notify(`${entry.name} was already deleted from the phonebook.`, 'error');
          setPersons(persons.filter(p => p.id !== id));
        });
      notify(`${entry.name} was deleted from the phonebook.`, 'success');
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} type={notificationType} />
      <div>
        Filter contacts: <Filter searched={searchName} handleChange={setSearch} />
      </div>
      <h2>Add new contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={setName}
        handleNumber={setNumber}
        handleAdd={addNewPerson}
      />
      <h2>Entries</h2>
      {persons
        .filter((person) => searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase()))
        .map((person) => (
          <Person key={person.id} person={person} deleteEntry={() => deleteEntry(person.id)} />
        ))}
    </div>
  );
};

export default App;
