import React from "react";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  // component state
  const [text, setText] = useState(""); //for input text
  const [rating, setRating] = useState(10); //holds rating
  const [btnDisabled, setBtnDisabled] = useState(true); //to validate input
  const [message, setMessage] = useState(""); //message for validation

  //update text with user input from form
  //cant simply check text length since that waits until the next render
  const handleTextChange = ({ target: { value } }) => { // get the value(destructured) passed in. if its "", then disable button and no message
    console.log("printing value from handleChange: ", value);

    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) { // if text is there, but less than 10, display message and disable button
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  }

  // handle submit
  const handleSubmit = (e)  => {
    e.preventDefault();

    if(text.trim().length >= 10) {
      const newFeedback = {
        text, rating
      }
      console.log(newFeedback)
    }
  }
 
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience?</h2>
        {/* code below takes in the rating and updates the state with it */}
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Share your experience"
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
