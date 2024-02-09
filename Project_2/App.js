{
  /* <div id="parent"> <div id='child'><h1>Hello i'm Deepa</h1> </div> </div> */
}
import React from "react";
import ReactDOM from "react-dom/client";
let heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello i'm Deepa ")
  )
);
{
  /* <div id="parent">
    <div id='child'>
        <h1>Hello i'm Deepa</h1>
        <h2>I'm from Banalore.</h2>
    </div>
</div> */
}
let heading2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello i'm deepa"),
    React.createElement("h2", {}, "I'm from Bangalore."),
  ])
);

//JSX
let heading3 = React.createElement("h1", {}, "I live in bangalore");
console.log(heading3);

const deepa = <h1>I live in Bangalore</h1>;
console.log(deepa);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);
