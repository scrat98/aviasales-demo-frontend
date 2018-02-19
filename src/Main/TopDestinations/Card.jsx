import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 0.5rem;
  text-decoration: none;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1200px) {
    margin-bottom: 2rem;
  }
`;

const PhotoWrapper = styled.picture`
  height: 11rem;
  @media (min-width: 768px) {
    height: 13.125rem;
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Content = styled.div`
  padding: 1rem 0.75rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 30px;
    height: 30px;
    border: 0.2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
    border-radius: 100%;
    margin-right: 1rem;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (min-width: 992px) {
    max-width: 8rem;
  }

  @media (min-width: 1200px) {
    max-width: 13.5rem;
  }
`;

const CityName = styled.h3`
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

const CountryName = styled.h4`
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

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 1rem;
  color: #00bae8;

  @media (min-width: 768px) {
    line-height: 2rem;
    font-size: 1.375rem;
  }
`;

const TripDate = styled.span`
  margin-top: 0.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #a0b0b9;
  text-align: right;
`;

const Card = props => (
  <Wrapper href="#">
    <PhotoWrapper>
      <Photo src={props.img} alt={props.city} />
    </PhotoWrapper>
    <Content>
      <NameWrapper>
        <CountryFlag src={props.flag} alt={props.country} />
        <Location>
          <CityName>{props.city}</CityName>
          <CountryName>{props.country}</CountryName>
        </Location>
      </NameWrapper>
      <Details>
        <Price>Найти от {props.price} ₽</Price>
        <TripDate>{props.date}</TripDate>
      </Details>
    </Content>
  </Wrapper>
);

export default Card;
