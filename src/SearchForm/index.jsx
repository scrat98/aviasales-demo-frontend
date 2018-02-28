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

class SearchForm extends React.Component {
  state = {
    openedFilter: undefined
  };

  openFilter = filter => {
    this.setState({ openedFilter: filter });
  };

  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <AviaPlacesInput
          compact={this.props.compact}
          openFilter={this.openFilter}
          isDepartureOpen={this.state.openedFilter === "departureLocation"}
          isDestinationOpen={this.state.openedFilter === "destinationLocation"}
        />
        <TripDateInput
          compact={this.props.compact}
          openFilter={this.openFilter}
          isDepartureOpen={this.state.openedFilter === "departureDate"}
          isDestinationDateOpen={this.state.openedFilter === "destinationDate"}
        />
        <PassengersInput
          compact={this.props.compact}
          openFilter={this.openFilter}
          isOpen={this.state.openedFilter === "passengers"}
        />
        <SubmitButton compact={this.props.compact} />
      </Wrapper>
    );
  }
}

export default SearchForm;
