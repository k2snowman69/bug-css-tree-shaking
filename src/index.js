import React from "react";
import ReactDOM from "react-dom";
import { Component as ComponentC } from "./ui/component--import-modules";
import { Component as ComponentA } from "./ui/component--no-import";
import { Component as ComponentB } from "./ui/component--import-no-modules--index";
import { Component as ComponentD } from "./ui/component--import-no-modules--component";

const App = () => (
  <>
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ComponentD />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
