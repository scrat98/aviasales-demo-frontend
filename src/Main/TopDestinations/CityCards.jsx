import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import Card from "./Card";

import flag_ru from "./flags/flag_ru.png";
import flag_md from "./flags/flag_md.png";

import adler from "./cities/adler.png";
import barselona from "./cities/barselona.png";
import krasnodar from "./cities/krasnodar.png";
import minvodi from "./cities/minvodi.png";
import simferopol from "./cities/simferopol.png";
import spb from "./cities/spb.png";

export default () => (
  <Grid>
    <Row>
      <Col md={10} xs={12} mdOffset={1}>
        <Row>
          <Col lg={6} md={12}>
            <Card
              img={krasnodar}
              city="Краснодар"
              country="Россия"
              price="1 212"
              date="18 марта"
              flag={flag_ru}
            />
          </Col>
          <Col lg={6} md={12}>
            <Card
              img={adler}
              city="Сочи (Адлер)"
              country="Россия"
              price="1 334"
              date="27 марта"
              flag={flag_ru}
            />
          </Col>
          <Col lg={6} md={12}>
            <Card
              img={spb}
              city="Санкт-Петербург"
              country="Россия"
              price="1 508"
              date="19 марта"
              flag={flag_ru}
            />
          </Col>
          <Col lg={6} md={12}>
            <Card
              img={minvodi}
              city="Минеральные воды"
              country="Россия"
              price="2 074"
              date="13 марта"
              flag={flag_ru}
            />
          </Col>
          <Col lg={6} md={12}>
            <Card
              img={simferopol}
              city="Симферополь (Крым)"
              country="Крым"
              price="2 407"
              date="13 марта"
              flag={flag_ru}
            />
          </Col>
          <Col lg={6} md={12}>
            <Card
              img={barselona}
              city="Барселона"
              country="Испания"
              price="4 247"
              date="24 марта"
              flag={flag_md}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
);
