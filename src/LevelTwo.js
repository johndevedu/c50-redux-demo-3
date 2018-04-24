import React from "react";
import LevelThree from "./LevelThree";
import { connect } from "react-redux";
import { addHello } from "./action";

function LevelTwo({ dispatch }) {
  return (
    <div className="level-two">
      <h2>hello from level two!</h2>
      <button
        onClick={e => {
          dispatch(addHello());
        }}
      >
        hello
      </button>
      <LevelThree />
    </div>
  );
}

export default connect()(LevelTwo);
