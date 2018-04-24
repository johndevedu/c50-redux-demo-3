import React from "react";
import LevelTwo from "./LevelTwo";
import { connect } from "react-redux";

class LevelOne extends React.Component {
  render() {
    return (
      <div className="level-one">
        <h1>hello from level one!</h1>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(this.props.hellos, null, 2)}
        </pre>
        <LevelTwo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hellos: state.hellos
});

export default connect(mapStateToProps)(LevelOne);
