import React, { Component } from 'react';
import './css/style.css';
import Markup from './jsx/index';
import { Lines } from 'react-preloaders';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class App extends Component {



  
  render() {
    return (
      <div className="App">
        <Markup />
        <Lines />
      </div>
    );
  }
}

export default App;
