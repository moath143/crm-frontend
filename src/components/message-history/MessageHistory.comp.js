import React from "react";
import PropTypes from "prop-types";
import './message-history.style.css'
function MessageHistory({ msg }) {
    console.log(msg)
    if(!msg) return null
    return msg.map((row, index) => {
        return (
          <div key={index} className="message-history mt-3">
            <div className="send font-weigth-bolder text-secondary">
              <div className="sender">sender : {row.messageBy} </div>
              <div className="date">date: {row.date} </div>
            </div>
            <div className="message">message: {row.message} </div>
          </div>
        );
    })
}

export default MessageHistory;

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
