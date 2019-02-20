import React from 'react';
import CrossMultiplicationForm from './CrossMultiplicationForm';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Rule of Three / Cross-multiplication</h1>
        <CrossMultiplicationForm />
      </main>
    )
  }
}