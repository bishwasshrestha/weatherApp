import { useState } from 'react';
import "./Search.css";

const Search = ({countries, setShowAll, setSearch}) => {  
  const [newSearch, setNewSearch] = useState("Nepal");  
  const handleSearchInput = () => {
    const findings = countries.filter((nation) =>
      nation.name.toLowerCase().includes(newSearch.toLowerCase())
    );

    setNewSearch("");

    if (findings.length > 10) {
      return alert(`${findings.length} items found. Please refine your search`);
    } else if(findings.length === 0){
      return alert('country not available')
    }else {
      setSearch(findings);
    }
    if (findings !== "") {
      setShowAll(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewSearch(e.target.value);
  };
  return (   
      <div className='search-bar'> 
          <input value={newSearch} onChange={handleChange} placeholder='country...' />
          <button onClick={handleSearchInput}>Search</button> 
      </div> 
  )
}

export default Search;