import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #a0b0b9;
  text-align: left;
  text-transform: uppercase;
`;

const Detail = styled.a`
  color: black;
  cursor: pointer;
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
  font-style: normal;
  font-weight: normal;
`;

export default ({ country, flag, city, departures }) => (
  <Wrapper>
    <HeaderWrapper>
      <CountryFlag src={flag} />
      <Location>
        <CityName>{city}</CityName>
        <CountryName>{country}</CountryName>
      </Location>
    </HeaderWrapper>
    {departures.map(departure => (
      <Detail href={departure.href}>
        <Location>{departure.from}</Location>
        <Price>от {departure.price}</Price>
      </Detail>
    ))}
  </Wrapper>
);
