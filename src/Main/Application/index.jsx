import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import android from "./icons/android.svg";
import apple from "./icons/apple.svg";
import iphone from "./icons/iphone.png";
import rating from "./icons/rating.svg";
import wf from "./icons/wf.svg";

const Background = styled.div`
  background-image: linear-gradient(to right, #01b0dd 0%, #196ebd 100%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-weight: 500;
    line-height: 2.5rem;
    font-size: 2rem;
    justify-content: flex-start;
    text-align: left;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    font-weight: 500;
    line-height: 2.5rem;
    font-size: 2rem;
    justify-content: flex-start;
    text-align: left;
  }
`;

const RatingImg = styled.img`
  margin-right: 0.5rem;
`;

const RatingText = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 1.5rem;
  font-size: 1rem;
  color: white;
`;

const AppsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.5rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AppLink = styled.a`
  display: flex;
  font-style: normal;
  font-weight: normal;
  line-height: 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  color: white;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      border-right: 1px solid white;
    }
  }

  &:before {
    background: url(${props => props.src}) no-repeat left center;
    content: "";
    display: inline-block;
    width: 18px;
    height: 22px;
    color: black;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const AppImageWrapper = styled.div`
  position: relative;
`;

const AppImage = styled.img`
  display: block;
  position: absolute;
  width: 162px;
  height: 213px;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) {
    width: 237px;
    height: 312px;
  }
`;

export default () => (
  <Background>
    <Grid>
      <Content>
        <Row>
          <Col xs={12} md={8} mdOffset={4}>
            <HeaderWrapper>
              <Header>Скачай мобильное приложение Aviasales.ru</Header>
              <RatingWrapper>
                <RatingImg src={rating} alt="rating" />
                <RatingText>Более 103 000 оценок</RatingText>
              </RatingWrapper>
            </HeaderWrapper>
          </Col>
        </Row>
        <Row>
          <AppImageWrapper>
            <AppImage src={iphone} alt="iphone" />
          </AppImageWrapper>
          <Col xs={6} md={8} xsOffset={6} mdOffset={4}>
            <AppsWrapper>
              <AppLink src={apple} href="#">
                iPhone или iPad
              </AppLink>
              <AppLink src={android} href="#">
                Android
              </AppLink>
              <AppLink src={wf} href="#">
                Windows Phone
              </AppLink>
            </AppsWrapper>
          </Col>
        </Row>
      </Content>
    </Grid>
  </Background>
);
