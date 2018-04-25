// import { combineReducers } from 'redux';
// import { user }
import { helloReducer } from "./hello";

// combineReducers({
//   users:
// })

export default function demoApp(state = {}, action) {
  return {
    hellos: helloReducer(state.hellos, action)
  };
}
