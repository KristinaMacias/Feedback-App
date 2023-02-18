import React from "react";
import {useState, useEffect} from 'react'
import FeedbackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";




function App() {
    // hook below imports objects from my FeedbackData array 
    // const [feedback, setFeedback] = useState(FeedbackData);
    const [feedback, setFeedback] = useState(FeedbackData);

    

    

  return (
    console.log(feedback),
    <>
        <Header />
        <div className="container">
            <FeedbackList feedback={feedback} />
        </div>
    </>
  );
}

export default App;
