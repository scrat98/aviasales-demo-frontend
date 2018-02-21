import React from "react";
import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

import TopDestinations from "./TopDestinations";
import BestDeals from "./BestDeals";
import Agencies from "./Agencies";
import Subscribe from "./Subscribe";
import SpecialOffers from "./SpecialOffers";
import MainArticles from "./MainArticles";
import Application from "./Application";

export default () => (
  <React.Fragment>
    <Header />
    <main>
      <TopDestinations />
      <BestDeals />
      <Agencies />
      <Subscribe />
      <SpecialOffers />
      <MainArticles />
      <Application />
    </main>
    <Footer />
  </React.Fragment>
);
