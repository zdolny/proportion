import React from 'react';

export default class CrossMultiplicationForm extends React.Component {
  state = {
    numeratorLeft: '',
    numeratorRight: '',
    denumeratorLeft: '',
    denumeratorRight: '',
  };
  handleChangeNumber = (e) => {
    const inputName = e.target.name;
    if (!e.target.validity.patternMismatch) {
      const newNumber = e.target.value;
      this.setState(() => ({
        [inputName]: newNumber
      }));
    }
  }
  handleReset = (e) => {
    e.preventDefault();
    this.setState(() => ({
      numeratorLeft: '',
      numeratorRight: '',
      denumeratorLeft: '',
      denumeratorRight: '',
    }));
  }
  handleCrossMultiplication = (e) => {
    e.preventDefault();
    const result = this.state.numeratorRight * this.state.denumeratorLeft / this.state.numeratorLeft;
    this.setState(() => ({
      denumeratorRight: result
    }));
  }
  render() {
    return (
      <form onSubmit={this.handleCrossMultiplication} className="form">
        <div className="input-wrap">
          <input
            type="text"
            className="uk-input"
            pattern="^[0-9]+\.?[0-9]*$"
            name="numeratorLeft"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.numeratorLeft}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div className="input-wrap">
          <input
            type="text"
            className="uk-input"
            pattern="^[0-9]+\.?[0-9]*$"
            name="numeratorRight"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.numeratorRight}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div className="input-wrap">
          <input
            type="text"
            className="uk-input"
            pattern="^[0-9]+\.?[0-9]*$"
            name="denumeratorLeft"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.denumeratorLeft}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div className="input-wrap">
          <input
            type="text"
            className="uk-input"
            name="denumeratorRight"
            data-lpignore="true"
            placeholder="x"
            value={this.state.denumeratorRight}
            disabled
          />
        </div>
        <button type="button" onClick={this.handleReset} className="uk-button uk-button-default">Reset</button>
        <button type="submit" className="uk-button uk-button-primary">Calculate</button>
      </form>
    )
  }
}