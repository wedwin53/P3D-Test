import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Content from './components/Content';
import items from './Menu';
import Header from './Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: null
    }

  }
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  

  
  render() {
    //this.getMovies()
    const { children } = this.props;
    return (
    <div className="App">
      <Header 
        title="P3D Test"
        items={items}
      />
        <Content body={children}/>
    </div>
    );
  }
}

export default App;
