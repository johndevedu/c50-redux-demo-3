const initialState = [
  {
    action: "initial",
    text: "initialValue"
  }
];

const helloReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_HELLO":
      return [
        ...state,
        {
          action: action.type,
          text: action.text,
          index: action.index
        }
      ];

    default:
      return state;
  }
};

export default function demoApp(state = {}, action) {
  return {
    hellos: helloReducer(state.hellos, action)
  };
}
