import React from 'react';

export default class CrossMultiplicationForm extends React.Component {
  state = {
    numbers: [1, 2, 3, 4]
  };
  handleChangeNumber = (e) => {
    const inputName = e.target.name;
    let inputIndex = undefined;
    switch (inputName) {
      case 'topLeft':
        inputIndex = 0;
        break;
      case 'topRight':
        inputIndex = 1;
        break;
      case 'bottomLeft':
        inputIndex = 2;
        break;
      case 'bottomRight':
        inputIndex = 3;
        break;
    }
    const newNumber = (e.target.validity.valid) ? e.target.value : this.state.numbers[inputIndex];

    this.setState(prevState => {
      const numbers = this.state.numbers.map((number, i) => {
        if (i === inputIndex) {
          return Number(newNumber);
        }
        return number;
      });
      return {
        numbers,
      };
    });
  }
  handleCrossMultiplication = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleCrossMultiplication}>
        <div>
          <input
            type="text"
            pattern="[0-9]*"
            name="topLeft"
            data-lpignore="true"
            value={this.state.numbers[0]}
            onChange={this.handleChangeNumber}
          />
          <input
            type="text"
            pattern="[0-9]*"
            name="topRight"
            data-lpignore="true"
            value={this.state.numbers[1]}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div>
          <input
            type="text"
            pattern="[0-9]*"
            name="bottomLeft"
            data-lpignore="true"
            value={this.state.numbers[2]}
            onChange={this.handleChangeNumber}
          />
          <input
            type="text"
            pattern="[0-9]*"
            name="bottomRight"
            data-lpignore="true"
            value={this.state.numbers[3]}
            onChange={this.handleChangeNumber}
          />
        </div>
        <button>Calculate</button>
      </form>
    )
  }
}