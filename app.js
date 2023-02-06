import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const heading = React.createElement(
  "h1",
  { id: "theHeading", key: "theHeading", className: "theClass asdas gbgrte" },
  "Namaste World !!!!!!!!!!!"
);

const heading2 = React.createElement(
  "h2",
  { id: "theHeading2", key: "theHeading2", className: "theClass asdas gbgrte" },
  "Namaste World 222 !!!!!!!!!!!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "theClass asdas gbgrte",
  },
  [heading, heading2]
);

console.log(container);
root.render(container);
