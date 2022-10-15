import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
        <div className='container'>
          <div className='aside'>
          </div>
          <div className='main__content'>
          <Form />
          </div>
        </div>
    );
  }
}

export default App;
