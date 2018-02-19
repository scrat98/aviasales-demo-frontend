import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

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
  font-family: "Roboto";
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

const Offer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  flex-basis: 100%;

  @media (min-width: 768px) {
    max-width: 15rem;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    max-width: 18rem;
    margin-bottom: 0;
  }
`;

const OfferHeading = styled.div`
  display: flex;
  justify-content: space-between;
  background: #cd2027;
`;

const Title = styled.h3`
  margin: 1.5rem 0 1.5rem 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AirCompany = styled.img`
  margin: 1.5rem 0 0 0.5rem;
  width: 122px;
  height: 30px;

  @media (min-width: 768px) {
    width: 100px;
    height: 25px;
  }
`;

const From = styled.p`
  margin: 1rem 1rem 0.5rem 0;
  font-family: "Roboto";
  line-height: 1rem;
  font-size: 0.75rem
  color: #5c5c5c;
  text-align: right;

  @media (min-width: 768px) {
    margin: 1rem 0.5rem 0.5rem 0;
  }
`;

const Price = styled.span`
  font-family: "Roboto";
  font-size: 1.25rem;
  line-height: 1rem;
  color: #5c5c5c;
`;

const Remain = styled.p`
  font-family: "Roboto";
  margin: 0 1rem 0 0;
  color: #d93633;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: right;

  @media (min-width: 768px) {
    margin: 0 0.5rem 0 0;
    white-space: nowrap;
  }
`;

const Description = styled.p`
  margin: 1rem 0.5rem 1.5rem 0.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #242424;
  min-height: 3rem;
`;

const More = styled.a`
  display: block;
  margin: 0 0.5rem 1rem 0.5rem;
  padding: 0.5rem 0;
  text-align: center;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #d93533;
`;

const Icon = styled.img`
  margin: 0.75rem 1rem 0.75rem 0;
  width: 38px;
  height: 38px;
`;

const SeeAllLink = styled.a`
  display: block;
  padding-top: 1.25rem;
  font-family: "Roboto";
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
  font-family: "Roboto";
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
            <Offer>
              <OfferHeading>
                <Title>Билеты от 499 рублей!</Title>
              </OfferHeading>
              <OfferDetails>
                <Main>
                  <AirCompany src={pobeda} alt="pobeda" />
                  <div>
                    <From>
                      от <Price>499 ₽</Price>
                    </From>
                    <Remain>Осталось 45 дней</Remain>
                  </div>
                </Main>
                <Description>
                  Билеты от 499 рублей! Специальное предложение от авиакомпании
                  Победа
                </Description>
                <More href="#">Узнать подробности</More>
              </OfferDetails>
            </Offer>

            <Offer>
              <OfferHeading>
                <Title>В Нью-Йорк от 20 680 ₽</Title>
                <Icon src={logo} alt="whitestarline" />
              </OfferHeading>
              <OfferDetails>
                <Main>
                  <AirCompany src={lufthansa} alt="lufthansa" />
                  <div>
                    <From>
                      от <Price>20 680 ₽</Price>
                    </From>
                    <Remain>Осталось 19 дней</Remain>
                  </div>
                </Main>
                <Description>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <More href="#">Узнать подробности</More>
              </OfferDetails>
            </Offer>

            <Offer>
              <OfferHeading>
                <Title>В Лос-Анджелес от…</Title>
                <Icon src={logo} alt="whitestarline" />
              </OfferHeading>
              <OfferDetails>
                <Main>
                  <AirCompany src={lufthansa} alt="lufthansa" />
                  <div>
                    <From>
                      от <Price>20 360 ₽</Price>
                    </From>
                    <Remain>Осталось 19 дней</Remain>
                  </div>
                </Main>
                <Description>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <More href="#">Узнать подробности</More>
              </OfferDetails>
            </Offer>
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
