import React from "react";
import {useState, useEffect} from 'react'
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";



function App() {
    // hook below imports objects from my FeedbackData array 
    // const [feedback, setFeedback] = useState(FeedbackData);
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
            setFeedback(
                feedback.filter((item) => item.id !== id),
                //item.id is referring to the array directly and comparing it to the id passed in
                // filter returns an array (minus the item that we are deleting. with react, it's better to return a new array than delete directly from state)
            )
        }
    }
    

  return (
    console.log(feedback),
    <>
        <Header />
        <div className="container">
            <FeedbackStats feedback={feedback} />
            <FeedbackList 
            feedback={feedback}
            setFeedback={setFeedback} 
            handleDelete={deleteFeedback}
            />
        </div>
    </>
  );
}

export default App;
