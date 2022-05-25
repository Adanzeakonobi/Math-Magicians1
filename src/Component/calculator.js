import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn(event) {
    this.setState((state) => calculate(state, event));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator disflex">
        <div className="solution">
          <span>{total}</span>
          <span>{next}</span>
          <span>{operation}</span>
        </div>
        <div className="btn-display disflex">
          <div className="operators">
            <button type="button" onClick={() => this.onClickBtn('AC')}>AC</button>
            <button type="button" onClick={() => this.onClickBtn('+/-')}>+/-</button>
            <button type="button" onClick={() => this.onClickBtn('%')}>%</button>
            <button type="button" onClick={() => this.onClickBtn('7')}>7</button>
            <button type="button" onClick={() => this.onClickBtn('8')}>8</button>
            <button type="button" onClick={() => this.onClickBtn('9')}>9</button>
            <button type="button" onClick={() => this.onClickBtn('4')}>4</button>
            <button type="button" onClick={() => this.onClickBtn('5')}>5</button>
            <button type="button" onClick={() => this.onClickBtn('6')}>6</button>
            <button type="button" onClick={() => this.onClickBtn('1')}>1</button>
            <button type="button" onClick={() => this.onClickBtn('2')}>2</button>
            <button type="button" onClick={() => this.onClickBtn('3')}>3</button>
            <button type="button" onClick={() => this.onClickBtn('0')} className="two-btn">0</button>
            <button type="button" onClick={() => this.onClickBtn('.')}>.</button>
          </div>
          <div className="orange-btn">
            <button type="button" onClick={() => this.onClickBtn('/')}>/</button>
            <button type="button" onClick={() => this.onClickBtn('*')}>*</button>
            <button type="button" onClick={() => this.onClickBtn('-')}>-</button>
            <button type="button" onClick={() => this.onClickBtn('+')}>+</button>
            <button type="button" onClick={() => this.onClickBtn('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
