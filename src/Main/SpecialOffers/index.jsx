import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Offer from "./Offer";

import pobeda from "./icons/pobeda.png";
import lufthansa from "./icons/lufthansa.png";
import logo from "./icons/logo.svg";

const Wrapper = styled.div`
  padding: 2rem 0;
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Heading = styled.h2`
  display: block;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1.75rem;
  color: white;

  @media (min-width: 768px) {
    font-weight: 500;
    line-height: 2.6rem;
    font-size: 2rem;
  }
`;

const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SeeAllLink = styled.a`
  display: block;
  padding-top: 1.25rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;

  @media (min-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const FootNote = styled.span`
  display: block;
  margin: 0;
  padding: 0.5rem 0 0 0;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 1.5rem 0 0 0;
  }
`;

const Endnotes = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={10} lg={10} lgOffset={1}>
          <Heading>Спецпредложения на авиабилеты</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={10} lgOffset={1}>
          <OfferWrapper>
            <Offer
              title="Билеты от 499 рублей!"
              img={pobeda}
              alt="pobeda"
              price="499 ₽"
              remain="Осталось 45 дней"
              description="Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
            />
            <Offer
              title="В Нью-Йорк от 20 680 "
              img={lufthansa}
              alt="lufthansa"
              price="20 680 ₽"
              remain="Осталось 19 дней"
              description="Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
            />
            <Offer
              title="В Лос-Анджелес от…"
              img={logo}
              alt="logo"
              price="20 360 ₽"
              remain="Осталось 19 дней"
              description="Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
            />
          </OfferWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={10} lgOffset={1}>
          <Endnotes>
            <SeeAllLink href="#">Смотреть все спецпредложения</SeeAllLink>
            <FootNote>* средняя цена по направлению</FootNote>
          </Endnotes>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
