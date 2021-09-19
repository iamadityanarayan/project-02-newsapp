import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e86cf0ce88114c588fe0cca9a23ee0c0';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles})
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  render() {
    let defaultImageUrl='https://images.wsj.net/im-403222/social';
    return (
      <div className='container mt-3'>
        <h1 className='mb-5'>NewsWorld - Top Headlines</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { 
            this.state.articles.map((element) => { 
              return <NewsItem key={element.url} 
              title={element.title ?  element.title.slice(0, 30) : 'NA'} 
              description={element.description ?  element.description.slice(0, 88) : 'NA'} 
              imageUrl={element.urlToImage ? element.urlToImage : defaultImageUrl} 
              readmore={element.url} />
            })
          }
        </div>
      </div>
    )
  }
}

export default News;
