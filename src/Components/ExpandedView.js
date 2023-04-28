import Country from "./Country";
import "./ExpandedView.css";

const ExpandedView = ({ value}) => {   
  return (
    <div className="country-Info">      
      <div className="country-details">
        <div> Country: </div>        
          <Country value={value.address.country} />       
      </div>
      <div className="country-details">
        <div>City:</div>
          <Country value={value.address.city} />
      </div>  
      <div className="country-details">
        <div> Region:</div> 
          <Country value={value.address.region}/>
      </div>  
      <div className="country-details">
        <div> Type:</div>
          <Country value={value.type}/>
      </div>
    </div> 
  );
};
export default ExpandedView;
