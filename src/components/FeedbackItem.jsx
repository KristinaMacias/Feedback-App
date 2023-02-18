import React from "react";
import PropTypes from 'prop-types'
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  return (
    <div>
        <Card reverse={item.rating < 7 ? true: false}>
          <div className="num-display">{item.rating}</div>
          <div className="text-display">{item.text}</div>
        </Card>
    </div>
  );
}

// setting proptypes
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
