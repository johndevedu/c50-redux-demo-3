import React from "react";
import { connect } from "react-redux";
import { addHello } from "./action";

class LevelThree extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="level-three">
        <h3>hello from level three!</h3>
        <button
          onClick={e => {
            this.props.addHello();
          }}
        >
          hello!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addHello: () => dispatch(addHello())
});

export default connect(null, mapDispatchToProps)(LevelThree);
