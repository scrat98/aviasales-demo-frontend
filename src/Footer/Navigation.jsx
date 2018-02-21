import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "./styled";

const Wrapper = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e6e8;
`;

const NavBlock = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  color: #4a4a4a;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

const Footer = styled(Link)`
  color: #4a4a4a;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 0.75rem;

  &:after {
    content: "→";
    margin-left: 0.5rem;
  }
`;

const Countries = () => (
  <NavBlock>
    <Title>Страны</Title>
    <Link href="#">Россия</Link>
    <Link href="#">Таиланд</Link>
    <Link href="#">Черногория</Link>
    <Link href="#">Кипр</Link>
    <Link href="#">Болгария</Link>
    <Link href="#">Грузия</Link>
    <Footer href="#">Все страны</Footer>
  </NavBlock>
);

const Cities = () => (
  <NavBlock>
    <Title>Города</Title>
    <Link href="#">Москва</Link>
    <Link href="#">Санкт-Петербург</Link>
    <Link href="#">Симферополь</Link>
    <Link href="#">Адлер</Link>
    <Link href="#">Екатеринбург</Link>
    <Link href="#">Лондон</Link>
    <Footer href="#">Все города</Footer>
  </NavBlock>
);

const Airlines = () => (
  <NavBlock>
    <Title>Авиакомпании</Title>
    <Link href="#">Air Berlin</Link>
    <Link href="#">Air France</Link>
    <Link href="#">Alitalia</Link>
    <Link href="#">Air Baltic</Link>
    <Link href="#">Emirates</Link>
    <Link href="#">KLM</Link>
    <Footer href="#">Все авиакомпании</Footer>
  </NavBlock>
);

const Airports = () => (
  <NavBlock>
    <Title>Аэропорты</Title>
    <Link href="#">Шереметьево</Link>
    <Link href="#">Курумоч</Link>
    <Link href="#">Домодедово</Link>
    <Link href="#">Толмачево</Link>
    <Link href="#">Владивосток</Link>
    <Link href="#">Гамбург</Link>
    <Footer href="#">Все аэропорты</Footer>
  </NavBlock>
);

const Directions = () => (
  <NavBlock>
    <Title>Направления</Title>
    <Link href="#">MOW – SIP</Link>
    <Link href="#">MOW – AER</Link>
    <Link href="#">MOW – TIV</Link>
    <Link href="#">MOW – MRV</Link>
    <Link href="#">LED – MOW</Link>
    <Link href="#">MOW – BKK</Link>
  </NavBlock>
);

const Services = () => (
  <NavBlock>
    <Title>Сервисы</Title>
    <Link href="#">Горящие авиабилеты</Link>
    <Link href="#">Календарь низких цен</Link>
    <Link href="#">Карта низких цен</Link>
    <Link href="#">Спецпредложения</Link>
    <Link href="#">Таблица цен</Link>
    <Link href="#">Блог</Link>
    <Link href="#">Помощь</Link>
  </NavBlock>
);

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={2} md={3} xs={6}>
          <Countries />
        </Col>
        <Col lg={2} md={3} xs={6}>
          <Cities />
        </Col>
        <Col lg={2} md={3} xs={6}>
          <Airlines />
        </Col>
        <Col lg={2} md={3} xs={6}>
          <Airports />
        </Col>
        <Col lg={2} md={3} xs={6}>
          <Directions />
        </Col>
        <Col lg={2} md={3} xs={6}>
          <Services />
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
