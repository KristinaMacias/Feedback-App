import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

function FeedbackStats({ feedback }) {

    //calc rating average

    let average = feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, ""); //1 fixed decimal point, but will remove the 0 if only zero

  return (
    <div className='feedback-stats'>
        <h4>
            {feedback.length} Reviews
        </h4>
        <h4>
            {/* ternary to check for NaN and replace with 0 */}
            Average Rating: {isNaN(average) ? 0 : average}
        </h4>
    </div>
  )
}

FeedbackStats.prototype = {
    feedback: propTypes.array
}

export default FeedbackStats

