import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  componentDidMount() {
   this.updateNews();
  }

  handlePreviousPage = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  }

  handleNextPage = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  }

  render() {
    let defaultImageUrl = 'https://images.wsj.net/im-403222/social';
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsWorld - Top Headlines</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-between my-4 border-2 border-top border-bottom py-2">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-dark me-md-2" type="button"> &larr; Previous</button>
          <div className="align-items-center d-flex">Page - {this.state.page}</div>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextPage} className="btn btn-dark" type="button">Next &rarr;</button>
        </div>
        {this.state.loading && <Spinner />}
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          {!this.state.loading && this.state.articles.map((element) => {

            let _title = element.title ? element.title.length >= 30 ? element.title.slice(0, 30) + '...' : element.title.slice(0, 30) : 'NA';
            let _description = element.description ? element.description.length >= 88 ? element.description.slice(0, 88) + '...' : element.description.slice(0, 88) : 'NA';
            let _imageUrl = element.urlToImage ? element.urlToImage : defaultImageUrl

            return <NewsItem key={element.url} title={_title} description={_description} imageUrl={_imageUrl} readmore={element.url} author={element.author} date={element.publishedAt} />
          })
          }
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-between my-4 border-2 border-top border-bottom py-2">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-dark me-md-2" type="button"> &larr; Previous</button>
          <div className="align-items-center d-flex">Page - {this.state.page}</div>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextPage} className="btn btn-dark" type="button">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
