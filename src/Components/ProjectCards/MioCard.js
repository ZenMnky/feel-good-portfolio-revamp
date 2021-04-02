import React from 'react';
import mioImg from '../../img/smartmockups_mio.png';

export default function MioCard() {
  return (
    <div className="my-5">
      <a href="https://mio-client.vercel.app/">
        <img
          src={mioImg}
          alt={`mio application screenshot`}
          className="rounded"
        />
      </a>

      <h2 className="h2">Mio</h2>
      <div className="space-y-2">
        <h3 className="font-bold mt-1">The Gist:</h3>
        <p>
          Fullstack application designed to help users track and organize
          interpersonal relationships
        </p>
        <p>
          Allows users to create, edit, update, and delete relationship
          profiles.
        </p>
        <p>
          First fullstack application built. This project tied together all the
          different processes, tools, and technologies we had learned up to this
          point.
        </p>
      </div>
      <div className="space-y-2 mb-3">
        <h3 className="font-bold mt-1">The Stack:</h3>
        <p>
          React, HTML5, CSS3, JavaScript ES6 | PostgreSQL, Node, Express, Knex,
          Mocha/Chai
        </p>
      </div>
      <div className="space-x-4">
        <a href="https://github.com/ZenMnky/mio-client">
          <button className="btn">Repo</button>
        </a>
        <a href="https://mio-client.vercel.app/">
          <button className="btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
