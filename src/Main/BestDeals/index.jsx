import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import Header from "./Header";
import Deals from "./Deals";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

export default () => (
  <Wrapper>
    <Grid>
      <Header />
      <Deals />
      <Footer />
    </Grid>
  </Wrapper>
);
