import React from 'react';
import ContactIconGroup from '../Components/ContactIconGroup/ContactIconGroup';
import Nav from '../Components/Nav/Nav';
import Avatar from '../img/avatar.jpeg';

export default function LandingView() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4 ">
      <h1 className="text-xl font-medium text-black">JustinHager.Codes</h1>
      <img
        className="mx-auto my-8 h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={Avatar}
        alt="avatar"
      />
      <Nav className="sm:flex-col" />
      <ContactIconGroup />
    </div>
  );
}
