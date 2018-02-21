import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import aero from "./icons/aero.png";
import email from "./icons/email.png";
import list from "./icons/list.png";

const Wrapper = styled.div`
  padding: 1.25rem 0 1.5rem;

  @media (min-width: 768px) {
    padding: 1.25rem 0 3rem;
  }
`;

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  disaply: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  line-height: 1.2rem;
  font-size: 0.75rem;
  color: #4a4a4a;
  text-transform: uppercase;

  &:before {
    background: url(${props => props.src}) no-repeat left center;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    color: black;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const Content = styled.p`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: #4a4a4a;
`;

const MoreInfoLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: #00ace2;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col md={12} lg={10} lgOffset={1}>
          <ArticlesContainer>
            <Article>
              <Title src={aero}>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Title>
              <Content>
                Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
                самолет по сотням авиакомпаний и находим за считанные минуты
                самые дешевые авиабилеты. Чтобы купить авиабилет дешево,
                воспользуйтесь нашим поиском, который совершенно бесплатно
                сравнивает цены на авиабилеты онлайн и находит самые дешевые
                перелеты. Больше нет смысла ходить в авиакассы, обзванивать
                агентства — дешевый билет находится на расстоянии клика. На
                нашем сайте вы можете подобрать дешевые билеты на самолет в
                Европу, Азию и на другие континенты. Мы написали для вас простую
                инструкцию о том, как пользоваться поиском и экономить на
                перелетах от 1000 до 20 000 руб в год.
                <MoreInfoLink href="#">Подробнее</MoreInfoLink>
              </Content>
            </Article>
            <Article>
              <Title src={email}>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Title>
              <Content>
                Электронный авиабилет — это, по сути, обычный билет на самолет,
                но только в менее привычном для путешественника виде. Вся
                информация об авиаперелете (данные пассажира, маршрут
                следования) хранится в электронной базе, а пассажир получает на
                руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет
                онлайн и получив маршрут-квитанцию, удивлены ее видом — это
                обыкновенный лист формата А4, на котором распечатана вся
                информация о предстоящем перелете. Однако это действительно
                официальный документ, подтверждающий договор между
                авиаперевозчиком и пассажиром. При регистрации на рейс пассажир
                должен предъявить маршрут-квитанцию вместе с удостоверением
                личности точно так же, как предъявляют обыкновенный бумажный
                билет. Следует отметить, что электронный билет, приобретенный
                онлайн, стоит дешевле своего бумажного аналога.
                <MoreInfoLink href="#">Подробнее</MoreInfoLink>
              </Content>
            </Article>
            <Article>
              <Title src={list}>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Title>
              <Content>
                Есть масса путеводителей по странам, но ни одного о том, как
                провести время в самолете. Для того, чтобы сделать ваш перелет
                максимально комфортным, мы написали 20 советов о подготовке к
                путешествию. Ведь настоящее путешествие начинается со слов
                «Добро пожаловать на борт нашего самолета»!
                <MoreInfoLink href="#">Подробнее</MoreInfoLink>
              </Content>
            </Article>
          </ArticlesContainer>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
