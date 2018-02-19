import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import agency1 from "./icons/Agency1.png";
import agency2 from "./icons/Agency2.png";
import agency3 from "./icons/Agency3.png";
import agency4 from "./icons/Agency4.png";
import agency5 from "./icons/Agency5.png";

import fill_dot from "./icons/fill_dot.svg";
import empty_dot from "./icons/empty_dot.svg";
import next_arrow from "./icons/next_arrow.svg";
import prev_arrow from "./icons/prev_arrow.svg";

const Wrapper = styled.div`
  display: none;
  padding: 2rem 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Heading = styled.h2`
  margin: 0;
  padding: 0;
  display: block;
  font-family: "Roboto";
  font-weight: 500;
  line-height: 2.5rem;
  font-size: 2rem;
  text-align: center;
  color: #5c5c5c;
`;

const Carousel = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

const CarouselInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CarouselControl = styled.img`
  align-self: center;
  cursor: pointer;
`;

const CarouselItem = styled.img`
  margin: 0 2rem 2rem 0;

  &:last-child {
    margin-right: 0;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
`;

const Indicator = styled.img`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Heading>
        Дешевые авиабилеты от крупнейших авиакомпаний и агентств
      </Heading>
      <Row>
        <Col xl={10} md={12} xlOffset={1}>
          <Carousel>
            {/* <CarouselControl prev /> */}
            <CarouselControl src={prev_arrow} />
            <CarouselInner>
              <CarouselItem src={agency1} alt="agency1" />
              <CarouselItem src={agency2} alt="agency2" />
              <CarouselItem src={agency3} alt="agency3" />
              <CarouselItem src={agency4} alt="agency4" />
              <CarouselItem src={agency5} alt="agency5" />
            </CarouselInner>
            <CarouselControl src={next_arrow} />
            {/* <CarouselControl next /> */}
          </Carousel>
          <CarouselIndicators>
            {/* <Indicator active /> */}
            <Indicator src={fill_dot} />
            <Indicator src={empty_dot} />
            <Indicator src={empty_dot} />
          </CarouselIndicators>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
