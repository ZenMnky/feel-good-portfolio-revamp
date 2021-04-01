import React from 'react';
import { Route, Switch } from 'react-router';
import ContactIconGroup from '../Components/ContactIconGroup/ContactIconGroup';
import Nav from '../Components/Nav/Nav';
import Avatar from '../img/avatar.jpeg';
import PageNotFound from '../Old-Components/PageNotFound/PageNotFound';

console.log('Pursue what is meaningful, not what is expedient');

export default function LandingView() {
  return (
    <div className="container">
      <h1 className="title">JustinHager.Codes</h1>
      <img
        className="mx-auto mt-7 mb-5 h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={Avatar}
        alt="avatar"
      />
      <Nav />

      <ContactIconGroup />
    </div>
  );
}
