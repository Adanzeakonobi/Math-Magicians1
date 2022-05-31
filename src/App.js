import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './Component/calculator';
import Home from './Component/Home';
import Quotes from './Component/Quotes';
import Navbar from './Component/navibar';
import Footer from './Component/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-calculator">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Math-Magicians1/calculator" element={<Calculator />} />
          <Route path="/Math-Magicians1/Quotes" element={<Quotes />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
