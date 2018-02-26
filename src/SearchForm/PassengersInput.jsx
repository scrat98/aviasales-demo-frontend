import React from "react";
import styled, { css } from "styled-components";

import toggler from "./icons/toggler.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1px;
  overflow: hidden;

  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: ${props => (props.compact ? "25%" : "50%")};
  }
  @media (min-width: 1200px) {
    flex-basis: ${props => (props.compact ? "20%" : "25%")};
  }
`;

const Content = styled.div`
  cursor: pointer;
  background: white;
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (min-width: 768px) {
    margin-top: 0;
    border-bottom-left-radius: 0;
    ${props =>
      props.compact &&
      css`
        border-bottom-right-radius: 0;
      `};
  }

  @media (min-width: 1200px) {
    width: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const PassengersCount = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;

  &:after {
    content: ", ";
  }
`;

const TicketClass = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #aeaeae;
`;

const PassengersToggler = styled.div`
  position: absolute;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  right: 0.5rem;
  top: 1.2rem;
  background: url(${toggler}) no-repeat center center;
  display: inline-block;
  width: 17px;
  height: 20px;
`;

class PassengersInput extends React.Component {
  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <Content compact={this.props.compact}>
          <PassengersCount>1 пассажир</PassengersCount>
          <TicketClass>эконом</TicketClass>
          <PassengersToggler />
        </Content>
      </Wrapper>
    );
  }
}

export default PassengersInput;
