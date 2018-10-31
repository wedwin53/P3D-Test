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


  componentDidMount(){
    const URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=2b190de5c94ef62cf74f1721f6fa6e2c';
    fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(
      (myJson) =>{
        this.setState({data: myJson.results})
      }
    );
  }



  render() {
    const { children } = this.props;
    return (
    <div className="App">
      <Header 
        title="P3D Test"
        items={items}
      />
        <Content body={children} />
    </div>
    );
  }
}

export default App;
