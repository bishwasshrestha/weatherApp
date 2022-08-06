import React from 'react';
import { useState} from 'react';


const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const existingName = persons.filter((person) => person.name === newName);
  
  const addName = (e) => {
    e.preventDefault();     
    if (existingName.length > 0) {
      return alert(`${newName}  already exists`);
    } else if(newName === ''){
      return alert('Please enter a name')
    } 
  
    const newNameObject = {
      name: newName,
      number: newNumber,
    };
  
    setPersons(persons.concat(newNameObject));
    setNewName("");
    setNewNumber("");
  };
  
  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };
  return(
    <form onSubmit={addName}>
        <div>
          name:
          <input value={newName} onChange={handleName} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>    
  )
}

export default PersonForm;