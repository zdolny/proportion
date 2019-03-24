import React from 'react';
import CrossMultiplicationForm from './CrossMultiplicationForm';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <header className="header container">
          <h1 class="uk-h2">
            Rule of Three<br/>
            Cross-multiplication
          </h1>
        </header>
        <CrossMultiplicationForm />
      </main>
    )
  }
}