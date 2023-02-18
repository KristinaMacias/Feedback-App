import React from "react";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  return (
    <div>
      {item.rating >= 8 ? (
        <Card>
          <div className="num-display">{item.rating}</div>
          <div className="text-display">{item.text}</div>
        </Card>
      ) : (
        <Card style={{backgroundColor: '#808080'}}>
          <h1>FAKE NEWS</h1>
          <div className="num-display">{item.rating}</div>
          <div className="text-display">{item.text}</div>
        </Card>
      )}
    </div>
  );
}

export default FeedbackItem;
