import React from 'react';
import EIcon from '../assets/images/email icon.png';

export default class NavBar extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <header>
          <h1>Ryan McNair</h1>
          <h4>
            <a href='./index.html#dev-projects'>Web Development</a> ||{' '}
            <a href='./index.html#wellness'>Health & Wellness</a> ||{' '}
            <a href='./index.html#music'>Art & Music</a>
          </h4>
          <h5>
            <a href='mailto: ryan.mcnair@gmail.com'><img className='email-icon' src={EIcon} alt='email icon' /></a>
          </h5>
        </header>
      </>
    );
  }
}
