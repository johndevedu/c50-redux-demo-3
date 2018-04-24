let initialIndex = 0;

export const addHello = () => ({
  type: "ADD_HELLO",
  text: "hello",
  index: initialIndex++
});
