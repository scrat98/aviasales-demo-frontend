import React from "react";
import styled, { css } from "styled-components";

import calendar from "./icons/calendar.svg";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.compact ? "25%" : "30%")};
  }
`;

const DepartureDateWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1px;

  flex-basis: 50%;
`;

const DestinationDateWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1px;

  flex-basis: 50%;
`;

const DepartureDateInput = styled.input`
  cursor: pointer;
  border: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 1rem 2rem 1rem 1rem;
  background-color: white;

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 5px;
  }

  @media screen and (min-width: 1200px) {
    border-bottom-left-radius: 0;
  }
`;

const DestinationDateInput = styled.input`
  cursor: pointer;
  border: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 1rem 2rem 1rem 1rem;
  background-color: white;
`;

const CalendarButton = styled.button`
  position: absolute;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  right: 0.5rem;
  top: 1.2rem;
  background: url(${calendar}) no-repeat center center;
  display: inline-block;
  width: 17px;
  height: 20px;
`;

class TripDateInput extends React.Component {
  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <DepartureDateWrapper>
          <DepartureDateInput placeholder="Туда" />
          <CalendarButton />
        </DepartureDateWrapper>

        <DestinationDateWrapper>
          <DestinationDateInput placeholder="Обратно" />
          <CalendarButton />
        </DestinationDateWrapper>
      </Wrapper>
    );
  }
}

export default TripDateInput;
