const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", { id: "h1" }, "I am an H1 Tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("roots"));

console.log(root);

root.render(parent);
