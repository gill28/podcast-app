import React, { Component } from 'react';

import PodcastItems from '../api/fetchApi.component';

import './podcast-list.styles.scss';

// Using component state for the data since a state manager (aka. redux) seemed like overkill for the solution

class PodcastList extends Component {
  render() {
    return (
      <div className="wrapper">
        <ol className="podcastList">
          <PodcastItems />
        </ol>
      </div>
    );
  }
}

export default PodcastList;
