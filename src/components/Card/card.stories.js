import Card from "./index";

export default {
  component: Card,
  title: "My card",
};

export const Primary = {
  args: {
    title: "Click me",
    backgroundColor: "green",
  },
};

export const Secondary = {
  args: {
    title: "Secondary button",
    backgroundColor: "red",
  },
};
