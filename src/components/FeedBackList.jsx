import React from "react";
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";


function FeedbackList({ feedback, handleDelete }) {
  console.log("feedback as props: ", feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item}
        // passing the function upwards to app
        handleDelete={handleDelete} />
      ))}
    </div>
  )
}

FeedbackList.propType = {
  feedback: PropTypes.array
}

export default FeedbackList;
