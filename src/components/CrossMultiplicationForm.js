import React from 'react';

export default class CrossMultiplicationForm extends React.Component {
  state = {
    numbers: [1, 0, 0, 0]
  };
  handleChangeNumber = (e) => {
    const newNumber = Number(e.target.value);
    this.setState(prevState => {
      const numbers = this.state.numbers.map((number, i) => {
        if (i === 0) {
          return newNumber;
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
          <input type="number" name="topLeft" value={this.state.numbers[0]} onChange={this.handleChangeNumber} />
          <input type="number" name="topRight" value={this.state.numbers[2]} />
        </div>
        <div>
          <input type="number" name="bottomLeft" value={this.state.numbers[1]} />
          <input type="number" name="bottomRight" value={this.state.numbers[3]} />
        </div>
        <button>Calculate</button>
      </form>
    )
  }
}