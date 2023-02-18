import React from "react";

function Card({children}) {
    // aboves passes children as props 
  return (
    <div className="card">{children}</div>
  );
}

export default Card;
