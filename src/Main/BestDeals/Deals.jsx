import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import flag_ru from "./icons/flag_ru.png";
import flag_am from "./icons/flag_am.png";
import flag_md from "./icons/flag_md.png";

const DealWrapper = styled.div`
  margin: 0 0 2rem 0;
  padding: 0 0 2rem 0;
  border: none;
  border-bottom: 1px dashed #afbec6;
  &:last-child {
    border-bottom: none;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1200px) {
    width: 30%;
    margin: 0 2rem 0 0;
    padding: 0 2rem 0 0;
    display: inline-block;
    border: none;
    border-right: 1px dashed #afbec6;

    &:last-child {
      border-right: 0;
      margin: 0;
      padding: 0;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CountryFlag = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 100%;
  margin-right: 1rem;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const CityName = styled.div`
  padding: 0;
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  line-height: 1.25rem;
  font-size: 1rem;
  text-align: left;
  color: #5b5b5c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-weight: bold;
    line-height: 2rem;
    font-size: 1.375rem;
  }
`;

const CountryName = styled.div`
  padding: 0;
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #a0b0b9;
  text-align: left;
  text-transform: uppercase;
`;

const DealDetail = styled.a`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  &:last-child {
    margin-bottom: 1.25rem;
  }
`;

const From = styled.h3`
  margin: 0;
  padding: 0;
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #4a4a4a;
`;

const Price = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  color: #00bae8;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
`;

export default () => (
  <Row>
    <Col xs={12} md={10} mdOffset={1}>
      <DealWrapper>
        <HeaderWrapper>
          <CountryFlag src={flag_ru} />
          <Location>
            <CityName>Симферополь (Крым)</CityName>
            <CountryName>Крым</CountryName>
          </Location>
        </HeaderWrapper>
        <DealDetail href="#">
          <From>Из Москвы</From>
          <Price>от 4 813 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Санкт-Петербурга</From>
          <Price>от 7 857 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Новосибирска</From>
          <Price>от 15 127 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Екатеринбурга</From>
          <Price>от 9 275 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Челябинска</From>
          <Price>от 9 148 ₽</Price>
        </DealDetail>
      </DealWrapper>

      <DealWrapper>
        <HeaderWrapper>
          <CountryFlag src={flag_am} />
          <Location>
            <CityName>Ереван</CityName>
            <CountryName>Армения</CountryName>
          </Location>
        </HeaderWrapper>
        <DealDetail href="#">
          <From>Из Москвы</From>
          <Price>от 6 758 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Санкт-Петербурга</From>
          <Price>от 9 932 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Сочи</From>
          <Price>от 11 951 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Краснодара</From>
          <Price>от 11 741 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Ростова-на-Дону</From>
          <Price>от 11 956 ₽</Price>
        </DealDetail>
      </DealWrapper>

      <DealWrapper>
        <HeaderWrapper>
          <CountryFlag src={flag_md} />
          <Location>
            <CityName>Кишинёв</CityName>
            <CountryName>Молдавия</CountryName>
          </Location>
        </HeaderWrapper>
        <DealDetail href="#">
          <From>Из Москвы</From>
          <Price>от 8 319 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Санкт-Петербурга</From>
          <Price>от 10 800 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Краснодара</From>
          <Price>от 12 098 ₽</Price>
        </DealDetail>
        <DealDetail>
          <From>Из Сургута</From>
          <Price>от 16 277 ₽</Price>
        </DealDetail>
        <DealDetail href="#">
          <From>Из Нового Уренгоя</From>
          <Price>от 15 987 ₽</Price>
        </DealDetail>
      </DealWrapper>
    </Col>
  </Row>
);
