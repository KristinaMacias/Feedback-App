import { FaTimes } from 'react-icons/fa'
import React from "react";
import PropTypes from 'prop-types'
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {


  return (
    <div>
        <Card reverse={item.rating < 7 ? true: false}>
          <div className="num-display">{item.rating}</div>
          <button onClick={() => handleDelete(item.id)} className="close">
            {/* our onclick has a function that calls handleDelete function */}
            <FaTimes color="purple" />
          </button>
          <div className="text-display">{item.text}</div>
        </Card>
    </div>
  );
}

// setting proptypes
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
  //above will ensure that item is an object
}

export default FeedbackItem;
