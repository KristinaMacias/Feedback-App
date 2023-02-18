import React from "react";
import { useState } from "react";

function FeedbackItem() {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('Example of a feedback item');

    //update state hook for rating
    const handleRatingClick = () => {
        setRating((prev) => {
            return prev + 1;
        })
    }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleRatingClick}>Submit</button>
    </div>
  );
}

export default FeedbackItem;
