import React from "react";
import styled, { css } from "styled-components";

import aero from "./icons/aero.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  ${props =>
    props.compact
      ? css`
          flex-basis: 100%;
          padding: 1px;

          @media (min-width: 768px) {
            flex-basis: 25%;
          }

          @media (min-width: 1200px) {
            padding-left: 1rem;
            flex-basis: 20%;
          }
        `
      : css`
          flex-basis: 100%;
        `};
`;

const MainFormButton = styled.button`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: #ff9241;
  font-style: normal;
  font-weight: 900;
  color: white;

  &:hover {
    background-color: #ffa353;
    transition: all 0.3s;
  }

  ${props =>
    props.compact
      ? css`
          line-height: 1.5rem;
          font-size: 1.2rem;
          padding: 1rem;
          flex-basis: 100%;

          border-radius: 4px;
          @media (min-width: 768px) {
            border-radius: 0 0 4px 0;
          }

          @media (min-width: 1200px) {
            border-radius: 4px;
          }
        `
      : css`
          line-height: normal;
          font-size: 1.5rem;
          padding: 1rem 2rem;
          border-radius: 4px;
          margin-top: 1rem;
          flex-basis: 100%;

          @media (min-width: 768px) {
            margin-top: 2rem;
            font-size: 1.75rem;
            flex-basis: auto;
          }

          @media (min-width: 992px) {
            margin-top: 3rem;
            flex-basis: auto;
          }

          &:after {
            content: "";
            display: inline-block;
            width: 26px;
            height: 21px;
            background: url(${aero}) no-repeat;
            margin-left: 1.5rem;
          }
        `};
`;

class SubbmitButton extends React.Component {
  render() {
    return (
      <Wrapper compact={this.props.compact}>
        <MainFormButton compact={this.props.compact}>
          Найти билеты
        </MainFormButton>
      </Wrapper>
    );
  }
}

export default SubbmitButton;
