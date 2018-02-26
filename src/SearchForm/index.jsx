import React from "react";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import AviaPlacesInput from "./AviaPlacesInput";
import TripDateInput from "./TripDateInput";
import PassengersInput from "./PassengersInput";
import SubmitButton from "./SubmitButton";

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${props =>
    props.compact &&
    css`
      padding: 2rem 0;
      display: none;

      @media (min-width: 768px) {
        display: flex;
      }
    `};
`;

export default ({ compact }) => (
  <Wrapper compact={compact}>
    <AviaPlacesInput compact={compact} />
    <TripDateInput compact={compact} />
    <PassengersInput compact={compact} />
    <SubmitButton compact={compact} />
  </Wrapper>
);
