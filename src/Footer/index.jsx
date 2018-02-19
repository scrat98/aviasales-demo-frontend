import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import CompanyInfo from "./CompanyInfo";

const Footer = styled.footer`
  position: relative;
  padding: 2.25rem 0;
  background: white;
`;

export default () => (
  <Footer>
    <Navigation />
    <CompanyInfo />
  </Footer>
);
