import { helloReducer } from "./hello.js";

describe("hello reducer", () => {
  it("should return the initial state", () => {
    expect(helloReducer(undefined, {})).toEqual([
      {
        action: "initial",
        text: "initialValue"
      }
    ]);
  });

  it("should handle ADD_HELLO", () => {
    expect(
      helloReducer([], {
        type: "ADD_HELLO",
        text: "Testing add hello",
        index: 0
      })
    ).toEqual([
      {
        action: "ADD_HELLO",
        text: "Testing add hello",
        index: 0
      }
    ]);

    expect(
      helloReducer(
        [
          {
            action: "ADD_HELLO",
            text: "Testing",
            index: 0
          }
        ],
        {
          type: "ADD_HELLO",
          text: "Testing add hello to existing state",
          index: 1
        }
      )
    ).toEqual([
      {
        action: "ADD_HELLO",
        text: "Testing",
        index: 0
      },
      {
        action: "ADD_HELLO",
        text: "Testing add hello to existing state",
        index: 1
      }
    ]);
  });
});
