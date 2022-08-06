import React from 'react'
import "./Country.css"
const Country = ({ value }) => {
  return <li className="country-list">{value} </li>;
};

export default Country;