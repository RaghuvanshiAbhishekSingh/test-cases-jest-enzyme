import React from "react";
import PropTypes from "prop-types";

export default function GuessedWords(props) {
  return props.guessWords.length === 0 ? (
    <div data-test="component-guesswords">
      <span data-test="guess-instruction">Try to guess the secret word!</span>
    </div>
  ) : (
    <div data-test="component-guesswords">
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <th>Guess</th>
            <th>Matching letter</th>
          </thead>
          <tbody>
            {props.guessWords.map((word, index) => {
              return (
                <tr key={index} data-test="guessed-word">
                  <td>{word.guessWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
GuessedWords.propTypes = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }).isRequired
  ),
};
