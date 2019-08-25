import React from 'react';
import './App.css';
import Restaurant from './components/Restaurant';
import { hot } from "react-hot-loader";
import { Jumbotron } from 'reactstrap';

function App() {
  return (
    <div className="container">
      <Jumbotron>
        <Restaurant />
      </Jumbotron>

      <div className="footer">
        <p>Love people. Cook them tasty food.</p>
      </div>
    </div>
  );
}

export default hot(module)(App);
