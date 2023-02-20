import React from "react";

function RatingSelect({select, selected }) {

    const handleChange = (e) => {
        select(+e.currentTarget.value)
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
              checked={selected === value}
            />
            <label htmlFor={`num${value}`}>{value}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
