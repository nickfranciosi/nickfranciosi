import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import WorkDetail from './containers/WorkDetail';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route component={Portfolio} path="portfolio" />
      <Route component={WorkDetail} path="portfolio/:title" />
      <Route component={Contact} path="contact" />
    </Route>
);
