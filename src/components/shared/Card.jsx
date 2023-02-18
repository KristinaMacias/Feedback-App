import React from "react";

function Card({children, reverse}) {
    // aboves passes children as props and reverse

  return (
    // if reverse is true, give it a conditional class of 'reverse'. There is separate styling in css for something with class card & reverse
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  );
}

export default Card;
