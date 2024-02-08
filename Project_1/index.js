let heading = React.createElement("h1", { id: "firstproject" }, "deepa");
console.log(heading);
//<div id="parent"><h1 id="child">Deepa</h1></div>
let heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "child" }, "Deepa")
);
console.log(heading1);

//<div id="grandparent"><div id="parent"><h1="child">Deepa</h1></div></div>
let heading2 = React.createElement(
  "div",
  { id: "grandparent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h2", { id: "child" }, "Deepa")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);
