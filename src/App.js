import React from 'react';

import Banner from './components/banner/banner.component';
import PodcastList from './components/podcast-list/podcast-list.component';
import menuBar from './assets/images/menuBar.png';

import './App.scss';

/* Linking to google from hamburger menu as there were no found requirements for a sidebar menu 
In a production application would make this an off-canvas menu
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://google.com">
          <img src={menuBar} alt="menu bar" />
        </a>
      </header>
      <Banner />
      <PodcastList />
    </div>
  );
}

export default App;
