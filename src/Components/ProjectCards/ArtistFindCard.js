import React from 'react';
import img from '../../img/smartmockups_artist-find.png';

export default function ArtistFindCard() {
  return (
    <div className="my-5">
      <a href="https://justin-jenna-music-app.vercel.app/">
        <img src={img} alt={`artist find screenshot`} className="rounded" />
      </a>

      <h2 className="h2">Artist Find</h2>
      <div className="space-y-2">
        <h3 className="font-bold mt-1">The Gist:</h3>
        <p>Music-artist search-app connected to Spotify API.</p>
        <p>
          Allows users to search for music artist information by keyword, and
          see top tracks, most recent albums, and similar artists.
        </p>
        <p>
          Built as an extracurricular, collaborative 'touchstone' project with
          my peer <a href="https://www.jennachestnut.com/">Jenna Chestnut</a>,
          early on in our software development program.{' '}
        </p>
      </div>
      <div className="space-y-2 mb-3">
        <h3 className="font-bold mt-1">The Stack:</h3>
        <p>React, HTML5, CSS3, JS ES6</p>
      </div>
      <div className="space-x-4">
        <a href="https://github.com/ZenMnky/collaborative-spotify-app">
          <button className="btn">Repo</button>
        </a>
        <a href="https://justin-jenna-music-app.vercel.app/">
          <button className="btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
