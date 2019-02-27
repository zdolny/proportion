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
  handleCrossMultiplication = (e) => {
    e.preventDefault();
    const result = this.state.numeratorRight * this.state.denumeratorLeft / this.state.numeratorLeft;
    this.setState(() => ({
      denumeratorRight: result
    }));
  }
  render() {
    return (
      <form onSubmit={this.handleCrossMultiplication}>
        <div>
          <input
            type="text"
            pattern="^[0-9]+\.?[0-9]*$"
            name="numeratorLeft"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.numeratorLeft}
            onChange={this.handleChangeNumber}
          />
          <input
            type="text"
            pattern="^[0-9]+\.?[0-9]*$"
            name="numeratorRight"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.numeratorRight}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div>
          <input
            type="text"
            pattern="^[0-9]+\.?[0-9]*$"
            name="denumeratorLeft"
            data-lpignore="true"
            placeholder="Enter a number"
            value={this.state.denumeratorLeft}
            onChange={this.handleChangeNumber}
          />
          <input
            type="text"
            name="denumeratorRight"
            data-lpignore="true"
            placeholder="x"
            value={this.state.denumeratorRight}
            disabled
          />
        </div>
        <button>Calculate</button>
      </form>
    )
  }
}