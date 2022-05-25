import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickBtn = (event) => {
    const calcObj = calculate({ total, next, operation }, event);
    setTotal(calcObj.total);
    setNext(calcObj.next);
    setOperation(calcObj.operation);
  };

  return (
    <div className="calculator disflex">
      <div className="solution">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="btn-display disflex">
        <div className="operators">
          <button type="button" onClick={() => onClickBtn('AC')}>AC</button>
          <button type="button" onClick={() => onClickBtn('+/-')}>+/-</button>
          <button type="button" onClick={() => onClickBtn('%')}>%</button>
          <button type="button" onClick={() => onClickBtn('7')}>7</button>
          <button type="button" onClick={() => onClickBtn('8')}>8</button>
          <button type="button" onClick={() => onClickBtn('9')}>9</button>
          <button type="button" onClick={() => onClickBtn('4')}>4</button>
          <button type="button" onClick={() => onClickBtn('5')}>5</button>
          <button type="button" onClick={() => onClickBtn('6')}>6</button>
          <button type="button" onClick={() => onClickBtn('1')}>1</button>
          <button type="button" onClick={() => onClickBtn('2')}>2</button>
          <button type="button" onClick={() => onClickBtn('3')}>3</button>
          <button type="button" onClick={() => onClickBtn('0')} className="two-btn">0</button>
          <button type="button" onClick={() => onClickBtn('.')}>.</button>
        </div>
        <div className="orange-btn">
          <button type="button" onClick={() => onClickBtn('÷')}>÷</button>
          <button type="button" onClick={() => onClickBtn('x')}>x</button>
          <button type="button" onClick={() => onClickBtn('-')}>-</button>
          <button type="button" onClick={() => onClickBtn('+')}>+</button>
          <button type="button" onClick={() => onClickBtn('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
