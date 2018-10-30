// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import './App.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="App-header">
        <div>
          <img src={"https://cdn.80.lv/80.lv/uploads/2015/02/P3Din.png"} alt="logo" className="App-logo2"/>
          <h2>{title}</h2>

          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;