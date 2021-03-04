import React, { Component } from 'react';
import ProjectCard from './cards';
import getAllProjects from '../helpers/data';

class Portfolio extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => getAllProjects().then((response) => {
    this.setState({ projects: response });
  });

  render() {
    const showProjects = () => this.state.projects.map((project) => (
        <ProjectCard key={project.url} project={project} />
    ));

    return (
      <div className='portfolio'>
          <div className='d-flex flex-wrap'>{showProjects()}</div>
      </div>
    );
  }
}

export default Portfolio;
