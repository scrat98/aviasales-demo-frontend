import React from "react";
import styled, { css } from "styled-components";

import DatePicker, {
  DATE_PICKER_TYPE,
  DATE_PICKER_LOCALE
} from "../Filters/DatePicker";

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
  state = {
    from: null,
    to: null
  };

  openDepartureFilter = () => {
    this.props.openFilter("departureDate");
  };

  openDestinationFilter = () => {
    this.props.openFilter("destinationDate");
  };

  closeFilters = () => {
    this.props.closeFilters();
  };

  setStartDate = day => {
    this.setState({ from: day });
    this.normaliseDate();
    this.openDestinationFilter();
  };

  setEndDate = day => {
    this.setState({ to: day });
    this.normaliseDate();
    this.closeFilters();
  };

  normaliseDate() {
    this.setState(prevState => {
      const { from, to } = prevState;
      if (from > to) {
        return { to: null };
      }
    });
  }

  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <DepartureDateWrapper>
          <DepartureDateInput
            placeholder="Туда"
            onClick={this.openDepartureFilter}
          />
          <CalendarButton />
          {this.props.isDepartureOpen && (
            <DatePicker
              from={this.state.from}
              to={this.state.to}
              type={DATE_PICKER_TYPE.startDate}
              locale={DATE_PICKER_LOCALE.ru}
              setDay={this.setStartDate}
            />
          )}
        </DepartureDateWrapper>
        <DestinationDateWrapper>
          <DestinationDateInput
            placeholder="Обратно"
            onClick={this.openDestinationFilter}
          />
          <CalendarButton />
          {this.props.isDestinationDateOpen && (
            <DatePicker
              from={this.state.from}
              to={this.state.to}
              type={DATE_PICKER_TYPE.endDate}
              locale={DATE_PICKER_LOCALE.ru}
              setDay={this.setEndDate}
            />
          )}
        </DestinationDateWrapper>
      </Wrapper>
    );
  }
}

export default TripDateInput;
