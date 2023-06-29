import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <div>Heading Component</div>;
};

const HeadingComponentNew = () => {
  <React.Fragment>
    <div id="headerOne">Heading Component</div>;
    <div id="headerTwo">Heading Component</div>;
  </React.Fragment>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponentNew />);
