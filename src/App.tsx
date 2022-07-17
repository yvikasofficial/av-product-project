import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import "./App.css";
import AppLayout from "./components/Layout";
import Item from "./views/item";
import Orders from "./views/orders";
import Contact from "./views/contact";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Orders} exact path="/orders" />
          <Route component={Contact} exact path="/contact" />
          <Route component={Item} exact path="/:id" />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
