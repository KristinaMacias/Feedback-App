import React from "react";

function FeedBackList({ feedback }) {
  console.log("feedback as props: ", feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        item.rating
      ))}
    </div>
  )
}

export default FeedBackList;
