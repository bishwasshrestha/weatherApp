import "./Country.css"
const Country = ({ value , onClick}) => {
  const display_data = value ? value : 'Information not available'

  return <li className="country-list" onClick={onClick}>{display_data} </li>;
};

export default Country;