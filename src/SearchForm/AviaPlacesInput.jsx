import React from "react";
import styled, { css } from "styled-components";

import arrow from "./icons/arrow.svg";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-basis: 100%;
  @media (min-width: 1200px) {
    flex-basis: ${props => (props.compact ? "35%" : "45%")};
  }
`;

const DepartureWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1px;

  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const DestinationWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1px;

  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const DepartureInput = styled.input`
  border: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 1rem 4.5rem 1rem 1rem;
  background-color: white;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media (min-width: 768px) {
    border-top-right-radius: 0;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 5px;
  }
`;

const DestinationInput = styled.input`
  border: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 1rem 3rem 1rem 1rem;
  background-color: white;

  @media (min-width: 768px) {
    border-top-right-radius: 5px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 0;
  }
`;

const SwitchLocationButton = styled.button`
  position: absolute;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  right: 0.5rem;
  top: 1.2rem;
  background: url(${arrow}) no-repeat center center;
  display: inline-block;
  width: 16px;
  height: 16px;
`;

const CityAbbreviation = styled.div`
  color: #aeaeae;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
`;

const DepartureAbbreviation = CityAbbreviation.extend`
  position: absolute;
  right: 2rem;
  top: 1.2rem;
`;

const DestinationAbbreviation = CityAbbreviation.extend`
  position: absolute;
  right: 0.5rem;
  top: 1.2rem;
`;

class AviaPlacesInput extends React.Component {
  state = {
    departure: "Москва",
    departureAbbreviation: "mow",
    destination: "Санкт-Петербург",
    destinationAbbreviation: "led"
  };

  SwitchLocation = e => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      departure: prevState.destination,
      departureAbbreviation: prevState.destinationAbbreviation,
      destination: prevState.departure,
      destinationAbbreviation: prevState.departureAbbreviation
    }));
  };

  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <DepartureWrapper>
          <DepartureInput
            placeholder="Город отправления"
            value={this.state.departure}
          />
          <SwitchLocationButton onClick={this.SwitchLocation} />
          <DepartureAbbreviation>
            {this.state.departureAbbreviation}
          </DepartureAbbreviation>
        </DepartureWrapper>

        <DestinationWrapper>
          <DestinationInput
            placeholder="Город прибытия"
            value={this.state.destination}
          />
          <DestinationAbbreviation>
            {this.state.destinationAbbreviation}
          </DestinationAbbreviation>
        </DestinationWrapper>
      </Wrapper>
    );
  }
}

export default AviaPlacesInput;
