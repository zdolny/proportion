import React from 'react';
import CrossMultiplicationForm from './CrossMultiplicationForm';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <header className="header container">
          <h1>Rule of Three Calculator</h1>
          <p>Find the unknown number based on proportions</p>
        </header>
        <CrossMultiplicationForm />
      </main>
    )
  }
}