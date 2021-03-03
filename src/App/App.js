import React from 'react';
import './App.scss';
import Header from '../components/header';
import NavBar from '../components/navBar';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;
