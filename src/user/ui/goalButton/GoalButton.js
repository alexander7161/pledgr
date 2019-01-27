import React from "react";

const GoalButton = ({ onLoginUserClick }) => {
  return (
    <li className="pure-menu-item">
      <a
        href="#"
        className="pure-menu-link"
        onClick={event => onLoginUserClick(event)}
      >
        Create Goal
      </a>
    </li>
  );
};

export default GoalButton;
