import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Content from "./Content";

export default ({ compact }) => (
  <header>
    <Navbar compact={compact} />
    <Content compact={compact} />
  </header>
);
