import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import calendar from "./icons/calendar.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
`;

const ImgWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #e2f8ff 50% 50% no-repeat;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: inline-block;
  color: #4a4a4a;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-align: center;
  @media (min-width: 768px) {
    line-height: 2.25rem;
    font-size: 1.5rem;
  }
`;

export default () => (
  <Wrapper>
    <ImgWrapper>
      <img src={calendar} alt="calendar" />
    </ImgWrapper>
    <Content>Лучшие цены на авиабилеты за последний месяц</Content>
  </Wrapper>
);
