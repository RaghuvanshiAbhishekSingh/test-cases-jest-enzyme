import React from "react";
import PropTypes from "prop-types";

export default function GuessedWords(props) {
  return props.guessWords.length === 0 ? (
    <div data-test="component-guesswords">
      <span data-test="guess-instruction">Try to guess the secret word!</span>
    </div>
  ) : (
    <div data-test="component-guesswords">
      hh
    </div>
  );
}
GuessedWords.propTypes = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }).isRequired
  ),
};
