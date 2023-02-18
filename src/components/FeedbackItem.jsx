import React from "react";
import Card from "./shared/Card";


function FeedbackItem({ item }) {
  return (
    <Card>
      {/* will make item.rating and item.text available to Card component as children */}
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem;
