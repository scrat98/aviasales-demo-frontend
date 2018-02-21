import styled from "styled-components";

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  line-height: 1.5rem;
  font-size: 0.75rem;
  color: #5b5b5c;
  margin-right: 0.5rem;

  &:hover,
  &:active {
    color: #fd8a27;
    text-decoration: none;
    transition: 0.3s;
  }
`;
