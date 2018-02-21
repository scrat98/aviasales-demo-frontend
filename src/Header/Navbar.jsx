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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
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

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: ;
`;

const Currency = styled.div`
  display: ${props => (props.type === "search" ? "block" : "none")};
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 100px;

  @media (min-width: 576px) {
    padding: 0.5rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export default ({ type }) => (
  <Background>
    <Grid>
      <Row middle="xs">
        <Col xs>
          <Wrapper>
            <LogoWrapper href="/">
              <LogoImg src={logo} alt="Logo" />
              <LogoText>aviasales</LogoText>
            </LogoWrapper>
            <ToolbarWrapper>
              <Currency type={type}>rub</Currency>
            </ToolbarWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  </Background>
);
