import React from "react";
import styled from "styled-components";

import TopDestinations from "./TopDestinations";
import BestDeals from "./BestDeals";
import Agencies from "./Agencies";
import Subscribe from "./Subscribe";
import SpecialOffers from "./SpecialOffers";
import MainArticles from "./MainArticles";
import Application from "./Application";

export default () => (
  <main>
    <TopDestinations />
    <BestDeals />
    <Agencies />
    <Subscribe />
    <SpecialOffers />
    <MainArticles />
    <Application />
  </main>
);
