import React, { Component } from 'react';
import WorkItem from '../components/WorkItem';
import LunchNLearnImage from '../images/lunch-n-learn.png';
import DashboardImage from '../images/dashboard.jpg';
import MoreToYouthImage from '../images/moretoyouth.jpg';
import StogiesImage from '../images/stogies.jpg';

class Portfolio extends Component {
  render () {
    return(
      <div>
        <h2>Portfolio</h2>
        <div className="work-item-list">
          <WorkItem
            title="LunchNLearn"
            description="A test"
            img={LunchNLearnImage}
            link="www.github.com"
          />
          <WorkItem
            title="AOS Contractor Dashboard"
            description="A test"
            img={DashboardImage}
            link="www.github.com"
          />
          <WorkItem
            title="Oasis: More To Youth"
            description="A test"
            img={MoreToYouthImage}
            link="www.github.com"
          />
          <WorkItem
            title="Stogies On The Rocks"
            description="A test"
            img={StogiesImage}
            link="www.github.com"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
