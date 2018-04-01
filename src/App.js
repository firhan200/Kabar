import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

/*pages*/
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header></Header>
        
          <Route exact path='/' component={Home}/>
          <Route exact path='/news/:title' component={NewsDetail}/>
        
        <Footer></Footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
