import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";

export default ({ type }) => (
  <header>
    <Navbar type={type} />
    <Content type={type} />
  </header>
);
