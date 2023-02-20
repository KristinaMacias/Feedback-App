import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from './shared/Button'

function FeedbackForm() {
    // component state
    const [text, setText] = useState(''); //for input text
    const [btnDisabled, setBtnDisabled] = useState(true); //to validate input
    const [message, setMessage] = useState(''); //message for validation

    //update text with user input from form
    const handleTextChange = (e) => { 
        if(text === '') {
          setBtnDisabled(true); //if empty string, disable button
          setMessage(null); //null b/c message shouldn't show until a user starts typing
        } else if(text !== '' && text.trim().length <= 10) { //if not empty and less than or equal to 10 (trim will remove whitespace from count)
          setBtnDisabled(true);
          setMessage('Must include at least 10 characters');
        } else {
          setMessage(null);
          setBtnDisabled(false);
        }

        setText(e.target.value);
        console.log("length of text: ", text.length)
    }


  return (
    <Card>
      <form>
        <h2>How would you rate your experience?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} value={text} type="text" placeholder="Share your experience" />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
        
      </form>
    </Card>
  );
}

export default FeedbackForm;
