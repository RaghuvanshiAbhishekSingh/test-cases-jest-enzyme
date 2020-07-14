import React from "react";
import PropTypes  from 'prop-types'; // ES6

/**
 * Functional react component for congrats message.
 * @function
 * @params {object} props - React props,
 * @return {JSX.Element} - Render component(or null if `successs` prop is not passed)
 */
export default function Congrats(props) {
  return (
    <div data-test="component-congrats" className="alert alert-success" role="alert">
      {props.success && (
        <span data-test="congrats-message">
          Congratulations !! You guessed the word.
        </span>
      )}
    </div>
  );
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}