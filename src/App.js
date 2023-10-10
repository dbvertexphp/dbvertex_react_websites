// './App.js'
import React from 'react';
import Header from './components/Header'; // Import without curly braces
import About from './components/About';
import Services from './components/Services'; 
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <> 
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/Portfolio" exact component={Portfolio} />
      </Switch>
      </>
    </Router>
    </>
  );
}
export default App;
