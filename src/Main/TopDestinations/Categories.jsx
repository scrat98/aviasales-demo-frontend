import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import Category from "./Category";

import world from "./icons/world.svg";
import beach from "./icons/beach.svg";
import shop from "./icons/shop.svg";
import history from "./icons/history.svg";
import party from "./icons/party.svg";
import children from "./icons/children.svg";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={12} md={10} lg={6} mdOffset={1} lgOffset={3}>
          <Row center="xs">
            <Col xs={4} md={2}>
              <Category active img={world} alt="world" name="Куда угодно" />
            </Col>
            <Col xs={4} md={2}>
              <Category img={beach} alt="beach" name="Солнце и море" />
            </Col>
            <Col xs={4} md={2}>
              <Category img={shop} alt="shop" name="Шопинг, город" />
            </Col>
            <Col xs={4} md={2}>
              <Category img={history} alt="history" name="Культура и история" />
            </Col>
            <Col xs={4} md={2}>
              <Category img={party} alt="party" name="Ночная жизнь" />
            </Col>
            <Col xs={4} md={2}>
              <Category img={children} alt="children" name="Отдых с детьми" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
