import React from "react";
import { connect } from "react-redux";

const Input = (props) => {
  const { success } = props;
  const content = success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="Make a guess"
      />
      <button
        type="submit"
        data-test="submit-button"
        className="btn btn-primary"
      >
        Check{" "}
      </button>
    </form>
  );
  return <div data-test="component-input">{content}</div>;
};
const mapStateToProps = ({ success }) => {
  return {
    success,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
