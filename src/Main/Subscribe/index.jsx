import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import facebook from "./icons/facebook.svg";
import rss from "./icons/rss.svg";
import twitter from "./icons/twitter.svg";
import vk from "./icons/vk.svg";
import border from "./icons/border.png";

const Wrapper = styled.div`
  background: white;
  position: relative;
  padding: 2rem 0 3rem 0;
  display: none;

  &:after {
    content: "";
    display: block;
    background: url(${border}) repeat-x;
    height: 9px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const Heading = styled.h3`
  display: block;
  margin: 0;
  font-style: normal;
  font-weight: bold;
  line-height: 1.25rem;
  font-size: 1rem;
  text-align: center;
  color: #5c5c5c;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 1.5rem;
  font-size: 1rem;
  text-align: center;
  color: #5c5c5c;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const Link = styled.a`
  margin-right: 0.5rem;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  background: #9b9b9b;
  border: 1px solid #979797;
  border-radius: 50%;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;

const SubscribeFieldWrapper = styled.div`
  position: relative;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  display: flex;
`;

const EmailInput = styled.input`
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  background: #fff;
  color: #a0b0b9;
  border: none;
  width: 100%;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1.25rem;
  margin: 0;
  background: #ff8e41;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 1rem;
  color: white;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xl={10} xlOffset={1} md={6} mdOffset={3}>
          <Row>
            <Col xl={5}>
              <Heading>Хотите знать всё о скидках на авиабилеты?</Heading>
              <Description>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </Description>
            </Col>
            <Col xl={6} xlOffset={1}>
              <ActionsWrapper>
                <Socials>
                  <Link href="/">
                    <img src={vk} alt="vk" />
                  </Link>
                  <Link href="/">
                    <img src={facebook} alt="facebook" />
                  </Link>
                  <Link href="/">
                    <img src={twitter} alt="twitter" />
                  </Link>
                  <Link href="/">
                    <img src={rss} alt="rss" />
                  </Link>
                </Socials>
                <SubscribeFieldWrapper>
                  <EmailInput placeholder="Ваш email" />
                  <SubscribeButton>Подписаться</SubscribeButton>
                </SubscribeFieldWrapper>
              </ActionsWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
