import React, { Component } from 'react';
const unirest = require('unirest');

class BannerList extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      apiKey: 'd4d26683b651430093543948e702afd9'
      }
  }

  async componentDidMount() {
    const response = await unirest.get('https://listen-api.listennotes.com/api/v2/search?q=web%20design&sort_by_date=0&type=podcast&offset=0&len_min=5&len_max=30&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription%2Cauthor&language=English&safe_mode=1')
    .header('X-ListenAPI-Key', `${this.state.apiKey}`)
    response.toJSON();
    this.setState({
      data: response.body.results
    });
  }
  render() {
    return (
      this.state.data.map((item, key) =>
      <li key={item.id}>{item.title} <img src={item.thumbnail} alt={item.title}/></li>
      )
    )
    
  }
}

export default BannerList;