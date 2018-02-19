import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Note = styled.p`
  padding-top: 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  text-align: center;
  color: #4a4a4a;

  @media (min-width: 768px) {
    line-height: 1.5rem;
  }
`;

const Agreement = styled.small`
  display: block;
  margin-top: 1.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
  color: #a0b0b9;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

export default () => (
  <Row>
    <Col xs={12} xl={6} xlOffset={3}>
      <Note>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </Note>
      <Agreement>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </Agreement>
    </Col>
  </Row>
);
