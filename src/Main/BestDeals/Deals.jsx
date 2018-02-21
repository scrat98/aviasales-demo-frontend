import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Deal from "./Deal";

import flag_ru from "./icons/flag_ru.png";
import flag_am from "./icons/flag_am.png";
import flag_md from "./icons/flag_md.png";

export default () => (
  <Row>
    <Col xs={12} md={10} mdOffset={1}>
      <Deal
        country="Симферополь"
        city="Крым"
        flag={flag_ru}
        departures={[
          { from: "Из Москвы", price: "4 813 ₽" },
          { from: "Из Санкт-Петербурга", price: "7 857 ₽" },
          { from: "Из Новосибирска", price: "12 775 ₽" },
          { from: "Из Екатеринбурга", price: "9 252 ₽" },
          { from: "Из Челябинска", price: "9 112 ₽" }
        ]}
      />

      <Deal
        country="Армения"
        city="Ереван"
        flag={flag_am}
        departures={[
          { from: "Из Москвы", price: "6 615 ₽" },
          { from: "Из Санкт-Петербурга", price: "9 932 ₽" },
          { from: "Из Новосибирска", price: "11 951 ₽" },
          { from: "Из Екатеринбурга", price: "10 895 ₽" },
          { from: "Из Челябинска", price: "12 300 ₽" }
        ]}
      />

      <Deal
        country="Молдавия"
        city="Кишинёв"
        flag={flag_md}
        departures={[
          { from: "Из Москвы", price: "8 319 ₽" },
          { from: "Из Санкт-Петербурга", price: "10 800 ₽" },
          { from: "Из Новосибирска", price: "12 098 ₽" },
          { from: "Из Екатеринбурга", price: "16 277 ₽" },
          { from: "Из Челябинска", price: "15 987 ₽" }
        ]}
      />
    </Col>
  </Row>
);
