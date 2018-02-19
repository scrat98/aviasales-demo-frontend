import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";

import world from "./icons/world.svg";
import beach from "./icons/beach.svg";
import shop from "./icons/shop.svg";
import history from "./icons/history.svg";
import party from "./icons/party.svg";
import children from "./icons/children.svg";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-family: Roboto;
  padding: 0 0.3rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: ${props => (props.isActive ? "auto" : "pointer")};

  ${CategoryTitle} {
    color: ${props => (props.isActive ? "#5C5C5C" : "#00ace2")};
    border-bottom: ${props => (props.isActive ? "1px solid #00ace2" : "none")};
  }
`;

const CategoryImgWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  align-item: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  width: 50px;
  height: 50px;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={12} md={10} lg={6} mdOffset={1} lgOffset={3}>
          <Row center="xs">
            <Col xs={4} md={2}>
              <Category isActive>
                <CategoryImgWrapper>
                  <img src={world} alt="world" />
                </CategoryImgWrapper>
                <CategoryTitle>Куда угодно</CategoryTitle>
              </Category>
            </Col>
            <Col xs={4} md={2}>
              <Category>
                <CategoryImgWrapper>
                  <img src={beach} alt="beach" />
                </CategoryImgWrapper>
                <CategoryTitle>Солнце и море</CategoryTitle>
              </Category>
            </Col>
            <Col xs={4} md={2}>
              <Category>
                <CategoryImgWrapper>
                  <img src={shop} alt="shop" />
                </CategoryImgWrapper>
                <CategoryTitle>Шопинг, город</CategoryTitle>
              </Category>
            </Col>
            <Col xs={4} md={2}>
              <Category>
                <CategoryImgWrapper>
                  <img src={history} alt="history" />
                </CategoryImgWrapper>
                <CategoryTitle>Культура и история</CategoryTitle>
              </Category>
            </Col>
            <Col xs={4} md={2}>
              <Category>
                <CategoryImgWrapper>
                  <img src={party} alt="party" />
                </CategoryImgWrapper>
                <CategoryTitle>Ночная жизнь</CategoryTitle>
              </Category>
            </Col>
            <Col xs={4} md={2}>
              <Category>
                <CategoryImgWrapper>
                  <img src={children} alt="children" />
                </CategoryImgWrapper>
                <CategoryTitle>Отдых с детьми</CategoryTitle>
              </Category>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
