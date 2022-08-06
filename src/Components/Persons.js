import React from "react";

const Persons = ({ namesToShow }) => {
  return (
    <div>
      {namesToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default Persons;
