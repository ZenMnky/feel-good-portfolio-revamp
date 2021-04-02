import React, { Component } from 'react';
import cuid from 'cuid';

// import ProjectCard from './ProjectCard';
// import store from '../../store';
// const { projects } = store;

import MioCard from '../ProjectCards/MioCard';
import ArtistFindCard from '../ProjectCards/ArtistFindCard';
import SpacedRepetitionCard from '../ProjectCards/SpacedRepetitionCard';
import AcroYogaFlowCard from '../ProjectCards/AcroYogaFlowCard';

class Projects extends Component {
  render() {
    // let projectContent = projects.map(project => <ProjectCard {...project} key={cuid()}/>)

    return (
      <section className="mt-9 flex flex-col items-center">
        <h2 className="h2 text-xl mb-4">Projects</h2>
        <div className="flex flex-wrap text-center">
          <AcroYogaFlowCard key={cuid()} />
          <MioCard key={cuid()} />
          <ArtistFindCard key={cuid()} />
          <SpacedRepetitionCard key={cuid()} />
        </div>
      </section>
    );
  }
}

export default Projects;
