import React from "react";
import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

export default () => (
  <React.Fragment>
    <Header type="search" />
    <main>
      <div>Content</div>
    </main>
    <Footer />
  </React.Fragment>
);