import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioItem from '../components/PortfolioPageItem'
import PortfolioPage from '../components/PortfolioPage';


const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={ HomePage } exact={true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/portfolio/:id" component={ PortfolioItem} />
      <Route path="/contact" component={ ContactPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;
