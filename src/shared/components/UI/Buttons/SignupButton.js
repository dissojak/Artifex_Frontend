import React from "react";
import "./SignupButton.css";

const SignupButton = (props) => {
  return (
    <button className="btn" style={{ cursor: props.cursorStyle ? "pointer" : "default" }}>
      <svg
        id="add"
        xmlns="http://www.w3.org/2000/svg"
        width="22.483"
        height="22.483"
        viewBox="0 0 22.483 22.483"
      >
        <path
          id="Tracé_240"
          data-name="Tracé 240"
          d="M18.237,1H6.246A5.246,5.246,0,0,0,1,6.246V18.237a5.246,5.246,0,0,0,5.246,5.246H18.237a5.246,5.246,0,0,0,5.246-5.246V6.246A5.246,5.246,0,0,0,18.237,1Zm3.747,17.237a3.747,3.747,0,0,1-3.747,3.747H6.246A3.747,3.747,0,0,1,2.5,18.237V6.246A3.747,3.747,0,0,1,6.246,2.5H18.237a3.747,3.747,0,0,1,3.747,3.747Z"
          transform="translate(-1 -1)"
          fill="#4d3223"
        />
        <path
          id="Tracé_241"
          data-name="Tracé 241"
          d="M18.743,13.5H15V9.749a.749.749,0,0,0-1.5,0V13.5H9.749a.749.749,0,0,0,0,1.5H13.5v3.747a.749.749,0,1,0,1.5,0V15h3.747a.749.749,0,1,0,0-1.5Z"
          transform="translate(-3.004 -3.004)"
          fill="#4d3223"
        />
      </svg>
    </button>
  );
};

export default SignupButton;
