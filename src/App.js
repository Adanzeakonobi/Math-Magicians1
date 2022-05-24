import React from 'react';
import './App.css';
import Calculator from './Component/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
