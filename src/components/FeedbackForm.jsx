import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from './shared/Button'

function FeedbackForm() {
    // component state
    const [text, setText] = useState(''); 

    //update text with user input from form
    const handleTextChange = (e) => { 
        e.preventDefault();
        setText(text);
    }

  return (
    <Card>
      <form>
        <h2>How would you rate your experience?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} value={text} type="text" placeholder="Share your experience" />
          <Button>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
