import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/global.css';
import Nav from '../components/Nav/';

class App extends Component {
  render () {
    return(
      <div id="main">
        <div id="side-menu">
          <div className="hangover">
            <h1>Nick Franciosi | Web Developer</h1>
          </div>
          <Nav />
        </div>
        <ReactCSSTransitionGroup
        component="div"
        id="content"
        className="transition-group"
        transitionName="page"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object
};

export default App;
