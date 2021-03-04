import React from 'react';
import EIcon from '../assets/images/email icon.png';
import GitIcon from '../assets/images/GitIcon.png';
import LinkedIn from '../assets/images/LinkedIn.png';

export default class Header extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <header className='header-section'>
          <div>
          <h1>Ryan McNair Software Developer</h1>
          </div>
          <h5>
            <a href='mailto: ryan.mcnair@gmail.com'><img className='email-icon' src={EIcon} alt='email icon' /></a> ||{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ryanmcnair"><img className='header-icon' src={GitIcon} alt='Github icon'/></a> ||{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-mcnair-profile/"><img className='header-icon' src={LinkedIn} alt='LinkedIn icon'/></a>
          </h5>
          {/* <h4 className='navigation'>
            <a href='./index.html#dev-projects'>Web Development</a> ||{' '}
            <a href='./index.html#wellness'>Health & Wellness</a> ||{' '}
            <a href='./index.html#music'>Art & Music</a>
          </h4> */}
        </header>
      </>
    );
  }
}
