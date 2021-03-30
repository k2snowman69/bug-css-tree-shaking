import React from "react";
import ReactDOM from "react-dom";
import { Component as ComponentC } from "./ui/component--import-modules";
import { Component as ComponentA } from "./ui/component--no-import";
import { Component as ComponentB } from "./ui/component--import-no-modules";

const App = () => (
  <>
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
