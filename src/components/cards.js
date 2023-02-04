import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <>
        <Card className='project-card m-1'>
          <CardBody className='card-body'>
            <div className='card-text'>
              <CardTitle className='card-title' tag='h5'>
                {project.title}
              </CardTitle>
              <CardText>{project.description}</CardText>
              <CardText>Tech used: </CardText>
              <CardText>{project.technologiesUsed}</CardText>
              <div className='btn-container'>
                <Button
                  className='project-btn mr-2'
                  target='_blank'
                  href={project.url}
                >
                  <i class='fas fa-link card-icon'></i>
                </Button>
                <Button
                  className='project-btn'
                  target='_blank'
                  href={project.githubUrl}
                >
                  <i class='fab fa-github card-icon'></i>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ProjectCard;
