import React from "react";

function RatingSelect({select, selected }) {

    //function captures the value of rating
    const handleChange = (e) => {
        select(+e.currentTarget.value)
        // select is a callback to the setRating that stores event target value
      }

  return (
    <div>
      <ul className="rating">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <li key={value}>
            <input
              type="radio"
              id={`num${value}`}
              name="rating"
              value={value}
              onChange={handleChange}
              checked={selected === value} //true or false
              //checked determines if the radio is selected
              //the selected === value expression checks if the current value matches the selected rating (stage var), 
              //and if so, it sets the checked attribute to true, otherwise it sets it to false. 
              //This ensures that the radio button corresponding to the current rating is checked, and the others are not
            />
            <label htmlFor={`num${value}`}>{value}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
