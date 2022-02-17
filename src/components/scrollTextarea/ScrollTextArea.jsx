import React from 'react';
import "./StyledTextArea.css"
const ScrollTextArea = (props) => {
  return (
      <>
        <div className = "textarea_style">
            <textarea
                className="textarea"
                id="textarea"
                name ="content"
                rows= "4"
                cols = "37"
                value = {props.value}
                onChange={props.onChange}
                placeholder = "message"
                // maxLength="100"
            >
                {/* Message */}
            </textarea>
        </div>
      </>
  );
};

export default ScrollTextArea;
