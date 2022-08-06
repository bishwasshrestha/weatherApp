import React from 'react';
import { useState } from 'react';

const Filter = ({setShowAll, persons, showAll, setSearch}) => {
 
  const [newSearch, setNewSearch] = useState("");
  
  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const handleSearch = (e) => {
    const searchResult = persons.filter((person) =>
      person.name.toLowerCase().includes(newSearch)
    );
    setSearch(searchResult);
    setShowAll(!showAll)
  };
  return(
      <div>
        <div>      
          Search <input value={newSearch} onChange={handleNewSearch} />
        </div>
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
  )
}

export default Filter;