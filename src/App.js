import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'; // Import your global CSS file
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Services from './components/Services';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/team" component={Team} />
      <Route path="/services" component={Services} />
      <Route path="/clients" component={Clients} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);

export default App;
