import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessWords: [{ guessWord: "train", letterMatchCount: 3 }],
};

const setUp = (props = {}, state = null) => {
  const setProps = { ...defaultProps, ...props };
  //console.log({ ...setProps });
  const wrapper = shallow(<GuessedWords {...setProps} />);
  return wrapper;
};

describe("GuessWord component", () => {
  test("Does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
  });

  describe("If there are no word guess", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ guessWords: [] });
    });

    test("Render Without error", () => {
      const guessWordComponent = findByTestAttribute(
        wrapper,
        "component-guesswords"
      );
      expect(guessWordComponent.length).toBe(1);
    });

    test("Render instruction to gusss word", () => {
      const instruction = findByTestAttribute(wrapper, "guess-instruction");
      expect(instruction.text().length).not.toBe(0);
    });
  });

  describe("If there are word guess", () => {
    const guessWords = [
      { guessWord: "train", letterMatchCount: 3 },
      { guessWord: "brain", letterMatchCount: 3 },
      { guessWord: "party", letterMatchCount: 5 },
    ];
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ guessWords });
    });
    test("Render Without error", () => {
      const guessWordComponent = findByTestAttribute(
        wrapper,
        "component-guesswords"
      );
      expect(guessWordComponent.length).toBe(1);
    });

    test("Render 'guess word' section", () => {
      const guessWordsNode = findByTestAttribute(wrapper, "guessed-words");
      expect(guessWordsNode.length).toBe(1);
    });
    test("Correct number of guessed words", () => {
      const guessWordsNode = findByTestAttribute(wrapper, "guessed-word");
      expect(guessWordsNode.length).toBe(guessWords.length);
    });
  });
});
