import React from 'react';

export default class CardContainer extends React.Component {
  state = {};

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
        </header>
      </>
    );
  }
}
