import React from 'react';
import img from '../../img/smartmockups_spaced-repetition.png';

export default function SpacedRepetitionCard() {
  return (
    <div className="my-5">
      <a href="https://spaced-repetition-omega.vercel.app/">
        <img
          src={img}
          alt={`spaced repetition screenshot`}
          className="rounded"
        />
      </a>
      <h2 className="h2">Spaced Repetition</h2>
      <div className="space-y-2">
        <h3 className="font-bold mt-1">The Gist:</h3>
        <p>
          Helps users learn a set of Korean words through spaced repetition.
        </p>
        <p>
          The purpose of this project was to practice fullstack test-driven
          development and working with a linked-list data structure.
        </p>
        <p>
          Built up from starter code containing a basic skeleton on the back
          end, and fullstack tests.
        </p>
      </div>
      <div className="space-y-2 mb-3">
        <h3 className="font-bold mt-1">The Stack:</h3>
        <p>React, PostgreSQL, Express, Node, HTML5, CSS3, JS ES6</p>
      </div>
      <div className="space-x-4">
        <a href="https://github.com/ZenMnky/spaced-repetition">
          <button className="btn">Repo</button>
        </a>
        <a href="https://spaced-repetition-omega.vercel.app/">
          <button className="btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
