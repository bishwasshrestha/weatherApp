import React from "react";
import Country from "./Country";
import "./ExpandedView.css";
const ExpandedView = ({ value }) => {
  return (
    <div className="country-Info">
      <div className="country-details">
        <div> Name: </div>
        <div>
          <Country value={value.name} />
        </div>
      </div>
      <div className="country-details">
        <div>Area (sq.km):</div>
        <div>
          {" "}
          <Country value={value.area} />
        </div>
      </div>
      <div className="country-details">
        <div> Capital: </div>
        <div>
          <Country value={value.capital} />
        </div>
      </div>
      <div className="country-details">
        <div>language:</div>
        <div>
          {value ? (
            Object.entries(value.languages).map((lang, i) => {
              return (
                <div>
                  <Country key={i} value={lang[1].name} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="country-details">
        <div>Flag: </div>
        <div>
          <img src={value.flag} alt="flag" width="200px"></img>
        </div>
      </div>
    </div>
  );
};
export default ExpandedView;
