import React, { Component } from 'react';

class Contact extends Component {
  render () {
    return(
      <div>
        <h2>Contact</h2>
        <div>
          <a href="mailto:nickfranciosi@gmail.com">nickfranciosi@gmail.com</a>
        </div>
        <div>
          <a target="_blank" href="https://twitter.com/nickfranciosi">Twitter</a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/nickfranciosi">Github</a>
        </div>
      </div>
    );
  }
}

export default Contact;
