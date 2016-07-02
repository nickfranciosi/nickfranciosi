import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/global.css';
import Nav from '../components/Nav/';

class App extends Component {
  render () {
    return(
      <div>
        <h1>Nick Franciosi | Web Developer</h1>
        <Nav />
        <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
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
