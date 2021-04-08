import React from "react";
import ReactDOM from "react-dom";
import { Component as ComponentA } from "./ui/component--no-import";
import { Component as ComponentB } from "./ui/component--import-no-modules--index";
import { Component as ComponentE } from "./ui/component--import-modules--component";
import { Component as ComponentD } from "./ui/component--import-no-modules--component";
import { Component as ComponentE } from "./ui/component--tree-shake-unused";

const App = () => (
  <>
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ComponentD />
    <ComponentE />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
