import './App.css';
import Auth from './pages/Auth';
import React from 'react';
import Contacts from './pages/Contacts';
import { Switch,Route } from "react-router-dom";
import GetContact from './pages/GetContact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/get-contact">
        <GetContact />
      </Route>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
    </div>
  );
}

export default App;

