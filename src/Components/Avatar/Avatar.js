import React from 'react';
import AvatarImg from '../../img/avatar.jpeg';

export default function Avatar() {
  return (
    <>
      <img
        className="mx-auto mt-7 mb-5 h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={AvatarImg}
        alt="avatar"
      />
      <h3 className="font-mono text-gray-500 text-sm">
        Web Dev || Linux || AcroYoga
      </h3>
    </>
  );
}
