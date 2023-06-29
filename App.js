import React from "react";
import ReactDOM from "react-dom/client";

const headerElement = React.createElement(
  "h1",
  { id: "headerName" },
  "Hello Loky (using React.createElement)"
);

const headerElementJSX = <h1 id="headerElement">Hello, "JSX"</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headerElementJSX);
