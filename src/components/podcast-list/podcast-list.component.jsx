import React, { Component } from 'react';
import { ReactComponent as Itunes } from '../../assets/images/apple.svg';
import { ReactComponent as Web } from '../../assets/images/link.svg';
import { ReactComponent as Rss } from '../../assets/images/rss.svg';

import './podcast-list.styles.scss';

const unirest = require('unirest');

class PodcastList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      apiKey: 'd4d26683b651430093543948e702afd9'
    };
  }

  async componentDidMount() {
    const response = await unirest
      .get(
        'https://listen-api.listennotes.com/api/v2/search?q=web%20design&sort_by_date=1&type=podcast&offset=0&len_min=1&len_max=5&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription%2Cauthor&language=English&safe_mode=1'
      )
      .header('X-ListenAPI-Key', `${this.state.apiKey}`);
    this.setState({
      data: response.body.results
    });
  }
  render() {
    const items = this.state.data;
    let i = 0;
    console.log(items);
    return (
      <div className="wrapper">
        <ol className="podcastList">
          {items.map((item, key) => (
            <li className="podcastItem" key={key}>
              <div className="podcastItem-wrapper">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="podcastItem-figure"
                />
                <div className="podcastItem-bd">
                  <h2>{item.title_original}</h2>
                  <div className="podcastItem-bd-authors">
                    <span>{item.publisher_highlighted}</span>
                  </div>
                  <div className="podcastItem-bd-episodeCount">
                    {item.total_episodes} <span>episodes</span>
                  </div>
                  <hr />
                  <ul className="podcastItem-bd-relatedLinks">
                    <li>
                      <i>
                        <Itunes />
                      </i>
                      <a
                        href={
                          'https://podcasts.apple.com/us/podcast/id' +
                          item.itunes_id
                        }
                      >
                        Itunes
                      </a>
                    </li>
                    <li>
                      <i>
                        <Web />
                      </i>
                      <a href={item.listennotes_url}>WEB</a>
                    </li>
                    <li>
                      <i>
                        <Rss />
                      </i>
                      <a href={item.rss}>RSS</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="podcastItem-description">
                <p>{item.description_original}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default PodcastList;
