import React from 'react';
import './App.scss';
import NavBar from '../components/header';
import Bio from '../components/bio';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Bio />
      </div>
    );
  }
}

export default App;
