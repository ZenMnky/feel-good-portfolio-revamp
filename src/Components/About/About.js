import React from 'react';

export default function About() {
  return (
    <article className="mt-2 flex flex-col items-center ">
      <h2 className="font-mono text-black text-lg font-bold">About Me</h2>

      <div className="text-sm flex flex-col items-center my-1 text-center">
        <p>I build, maintain, and revamp web applications. </p>
        <p>I help out where I'm needed.</p>
        <p>I seek to understand.</p>
      </div>
      <div className="flex flex-col items-center my-1 text-sm text-center">
        <h4 className="font-semibold text-base"> Traits</h4>
        <p>Proactive - Versatile - Dependable</p>
      </div>

      <div className="flex flex-col items-center my-1 text-sm text-center">
        <h4 className="font-semibold text-base">Mantras</h4>
        <p>Start close in.</p>
        <p>Everything is figureoutable.</p>
        <p>The programming language is an implementation detail.</p>
      </div>
    </article>
  );
}
