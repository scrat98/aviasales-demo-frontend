import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import aero from "./icons/aero.svg";
import arrow from "./icons/arrow.svg";
import calendar from "./icons/calendar.svg";
import shape from "./icons/shape.svg";

const Background = styled.div`
  background: linear-gradient(to left, #196ebd, #01b0dd);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  height: 100vh;
  min-height: 32.375rem;
  padding-top: 3.75rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0;
  line-height: normal;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    line-height: 3rem;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    line-height: 3rem;
    font-size: 2.5rem;
  }
`;

const HeaderAside = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: white;
  margin: 0.5rem 0 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: 1.25rem;
  }
  @media (min-width: 992px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const MainForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainFormContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 3rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;
  padding: 1px 1px;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`;

const DepartureDateWrapper = styled.div`
  padding-right: 1px;
  position: relative;
  display: flex;
  flex-basis: 50%;
`;

const DestinationDateWrapper = styled.div`
  padding-left: 1px;
  position: relative;
  display: flex;
  flex-basis: 50%;
`;

const MainFormInput = styled.input`
  border: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 1rem 2rem 1rem 1rem;
  background: url(${props => props.src}) no-repeat right 10px center;
  background-color: white;
`;

const DepartureInput = MainFormInput.extend`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-right: 4.5rem;

  @media (min-width: 768px) {
    border-top-right-radius: 0;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 5px;
  }
`;

const DestinationInput = MainFormInput.extend`
  @media (min-width: 768px) {
    border-top-right-radius: 5px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 0;
  }
`;

const DepartureDateInput = MainFormInput.extend`
  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 5px;
  }

  @media screen and (min-width: 1200px) {
    border-bottom-left-radius: 0;
  }
`;

const DestinationDateInput = MainFormInput.extend``;

const PassengersWrapper = styled.div`
  border: 0;
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  line-height: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white url(${shape}) right 1rem center no-repeat;
  cursor: pointer;
  text-align: left;

  @media (min-width: 768px) {
    margin-top: 0;
    border-bottom-left-radius: 0;
    text-align: left;
  }

  @media (min-width: 1200px) {
    width: 100%;
    border-top-right-radius: 5px;
  }
`;

const PassengersCount = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  &:after {
    content: ", ";
  }
`;

const TicketClass = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #aeaeae;
`;

const SwitchButton = styled.button`
  position: absolute;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-style: normal;
  font-weight: normal;
  color: #aeaeae;
  right: 0.5rem;
  top: 1.2rem;

  &:after {
    content: "";
    background: url(${arrow}) no-repeat center center;
    display: inline-block;
    width: 16px;
    height: 16px;
    color: black;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

const MainFormButton = styled.button.attrs({ type: "submit" })`
  border: none;
  cursor: pointer;
  background: #ff9241;
  border-radius: 4px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    width: fit-content;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 26px;
    height: 21px;
    background: url(${aero}) no-repeat;
    margin-left: 1.5rem;
  }
  &:hover {
    background-color: #ffa353;
    transition: all 0.3s;
  }
`;

export default ({ type }) => (
  <Background>
    <Grid>
      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          <ContentWrapper>
            <HeaderWrapper>
              <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
              <HeaderAside>Лучший способ купить авиабилеты дешево</HeaderAside>
            </HeaderWrapper>
            <MainForm>
              <MainFormContent>
                <InputWrapper>
                  <DepartureInput
                    placeholder="Город отправления"
                    defaultValue="Москва"
                  />
                  <SwitchButton>MOW</SwitchButton>
                </InputWrapper>
                <InputWrapper>
                  <DestinationInput placeholder="Город прибытия" />
                </InputWrapper>
                <InputWrapper>
                  <DepartureDateWrapper>
                    <DepartureDateInput placeholder="Туда" src={calendar} />
                  </DepartureDateWrapper>
                  <DestinationDateWrapper>
                    <DestinationDateInput
                      placeholder="Обратно"
                      src={calendar}
                    />
                  </DestinationDateWrapper>
                </InputWrapper>
                <InputWrapper>
                  <PassengersWrapper>
                    <PassengersCount>1 пассажир</PassengersCount>
                    <TicketClass>эконом</TicketClass>
                  </PassengersWrapper>
                </InputWrapper>
              </MainFormContent>
              <MainFormButton>Найти билеты</MainFormButton>
            </MainForm>
          </ContentWrapper>
        </Col>
      </Row>
    </Grid>
  </Background>
);
