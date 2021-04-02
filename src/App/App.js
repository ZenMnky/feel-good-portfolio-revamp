import React from 'react';
import ContactIconGroup from '../Components/ContactIconGroup/ContactIconGroup';

import Avatar from '../Components/Avatar/Avatar';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';

console.log('Pursue what is meaningful, not what is expedient ✝️');

export default function App() {
  return (
    <div className="container">
      <h1 className="title">JustinHager.Codes</h1>
      <Avatar />
      <ContactIconGroup />
      <About />
      <Projects />
    </div>
  );
}
