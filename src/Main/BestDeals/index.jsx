import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import Header from "./Header";
import Deals from "./Deals";
import Footer from "./Footer";

const Background = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
`;

export default () => (
  <Background>
    <Wrapper>
      <Grid>
        <Header />
        <Deals />
        <Footer />
      </Grid>
    </Wrapper>
  </Background>
);
