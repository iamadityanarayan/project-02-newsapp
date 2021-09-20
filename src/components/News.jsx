import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e86cf0ce88114c588fe0cca9a23ee0c0&page=1&pageSize=20';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: 1,
      totalResults: parsedData.totalResults,
    })
  }

  handlePreviousPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e86cf0ce88114c588fe0cca9a23ee0c0&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e86cf0ce88114c588fe0cca9a23ee0c0&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parseInt(this.state.page));
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    let defaultImageUrl = 'https://images.wsj.net/im-403222/social';
    return (
      <div className='container my-3'>
        <h1 className='mb-5'>NewsWorld - Top Headlines</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            this.state.articles.map((element) => {

              let _title = element.title ? element.title.length >= 30 ? element.title.slice(0, 30) + '...' : element.title.slice(0, 30) : 'NA';
              let _description = element.description ? element.description.length >= 88 ? element.description.slice(0, 88) + '...' : element.description.slice(0, 88) : 'NA';
              let _imageUrl = element.urlToImage ? element.urlToImage : defaultImageUrl

              return <NewsItem key={element.url} title={_title} description={_description} imageUrl={_imageUrl} readmore={element.url} />
            })
          }
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-between my-4 border-2 border-top pt-4">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-dark me-md-2" type="button"> &larr; Previous</button>
          <div className="text-muted">{this.state.page}</div>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextPage} className="btn btn-dark" type="button">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
