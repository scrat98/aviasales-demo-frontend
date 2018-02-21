import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  background: #cd2027;
`;

const Title = styled.h3`
  margin: 1.5rem 0 1.5rem 1rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.div`
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
  line-height: 1rem;
  font-size: 0.75rem
  color: #5c5c5c;
  text-align: right;

  @media (min-width: 768px) {
    margin: 1rem 0.5rem 0.5rem 0;
  }
`;

const Price = styled.span`
  font-size: 1.25rem;
  line-height: 1rem;
  color: #5c5c5c;
`;

const Remain = styled.p`
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
  font-style: normal;
  font-weight: normal;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #242424;
  min-height: 3rem;
`;

const More = styled.a`
  display: block;
  cursor: pointer;
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

export default ({ title, img, alt, price, remain, description, href }) => (
  <Wrapper>
    <Heading>
      <Title>{title}</Title>
    </Heading>
    <Details>
      <Main>
        <AirCompany src={img} alt={alt} />
        <div>
          <From>
            от <Price>{price}</Price>
          </From>
          <Remain>{remain}</Remain>
        </div>
      </Main>
      <Description>{description}</Description>
      <More href={href}>Узнать подробности</More>
    </Details>
  </Wrapper>
);
