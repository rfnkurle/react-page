import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends Component{
  render(){
  return (

    
    <Router>
      <NavBar tagline="Hello Friends"/>
      <Switch>
        <Route exact path ="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Home}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
