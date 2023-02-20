import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

function FeedbackStats({ feedback }) {

    //calc rating average

    let average = feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
        <h4>
            {feedback.length} Reviews
        </h4>
        <h4>
            Average Rating: {isNaN(average) ? 0 : average}
        </h4>
    </div>
  )
}

FeedbackStats.prototype = {
    average: propTypes.number
}

export default FeedbackStats

