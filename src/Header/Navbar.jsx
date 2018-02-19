import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logo from "./icons/logo.svg";

const Background = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to left, #196ebd, #01b0dd);
  @media (min-width: 1024px) {
    position: fixed;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  text-decoration: none;
  color: white;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 29px;
`;

const LogoText = styled.span`
  margin: 0 0.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export default () => (
  <Background>
    <Grid>
      <Row middle="xs">
        <Col xs>
          <LogoWrapper href="/">
            <LogoImg src={logo} alt="Logo" />
            <LogoText>aviasales</LogoText>
          </LogoWrapper>
        </Col>
      </Row>
    </Grid>
  </Background>
);
