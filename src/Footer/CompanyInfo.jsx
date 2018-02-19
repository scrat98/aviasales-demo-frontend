import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "./styled";

import vk from "./icons/vk.svg";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import viber from "./icons/viber.svg";
import android from "./icons/android.svg";
import apple from "./icons/apple.svg";
import windows from "./icons/windows.svg";

const Wrapper = styled.div`
  padding-top: 1.5rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const SocialWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const AboutCompany = () => (
  <AboutWrapper>
    <Link href="#">О компании</Link>
    <Link href="#">Партнёрская программа</Link>
    <Link href="#">Реклама</Link>
    <Link href="#">Вакансии</Link>
    <Link href="#">Помощь</Link>
    <Link href="#">Правила</Link>
    <Link href="#">White Label авиабилеты</Link>
  </AboutWrapper>
);

const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  &:before {
    background: url(${props => props.src}) no-repeat center center;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    color: black;
    margin-right: 0.25rem;
  }
`;

const Social = () => (
  <SocialWrapper>
    <SocialLink href="#" src={vk}>
      Вконтакте
    </SocialLink>
    <SocialLink href="#" src={facebook}>
      Фейсбук
    </SocialLink>
    <SocialLink href="#" src={instagram}>
      Инстаграм
    </SocialLink>
    <SocialLink href="#" src={twitter}>
      Твиттер
    </SocialLink>
    <SocialLink href="#" src={viber}>
      Вайбер
    </SocialLink>
  </SocialWrapper>
);

const HotelLink = styled(Link)`
  margin: 1rem 0;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Copyright = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #6d787e;
  text-align: center;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 992px) {
    text-align: right;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`;

const App = styled.img`
  width: 125px;
  margin: 0.25rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={7} md={12}>
          <LeftWrapper>
            <AboutCompany />
            <Social />
            <HotelLink href="#">Поиск и бронирование отелей</HotelLink>
          </LeftWrapper>
        </Col>
        <Col lg={5} md={12}>
          <RightWrapper>
            <AppWrapper>
              <a href="#">
                <App src={apple} />
              </a>
              <a href="#">
                <App src={android} />
              </a>
              <a href="#">
                <App src={windows} />
              </a>
            </AppWrapper>
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </RightWrapper>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
