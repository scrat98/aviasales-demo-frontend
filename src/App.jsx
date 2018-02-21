import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./Main";
import Search from "./Search";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" exact component={Main} />
      <Route path="/search" component={Search} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
