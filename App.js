import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <div>Heading Component</div>;
};

const HeadingComponentNew = () => <div>Heading Component</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponentNew />);
