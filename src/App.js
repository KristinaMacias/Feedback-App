import React from "react";
import { v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {
    // hook below imports objects from my FeedbackData array 
    // const [feedback, setFeedback] = useState(FeedbackData);
    const [feedback, setFeedback] = useState(FeedbackData);


    //updates the global state with new feedback object 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback]); //destructure the feedback array and add the new feedback to it
    }

    //deletes feedback from the global state
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
    <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
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
