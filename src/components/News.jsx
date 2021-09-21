import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from 'react-scroll-to-top';

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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsWorld`
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

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  };

  render() {
    let defaultImageUrl = 'https://images.wsj.net/im-403222/social';
    return (
      <>
        <div className='pt-5'>
          <h1 className='text-center mt-4'>NewsWorld - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                {!this.state.loading && this.state.articles.map((element) => {

                  let _title = element.title ? element.title.length >= 30 ? element.title.slice(0, 30) + '...' : element.title.slice(0, 30) : 'NA';
                  let _description = element.description ? element.description.length >= 88 ? element.description.slice(0, 88) + '...' : element.description.slice(0, 88) : 'NA';
                  let _imageUrl = element.urlToImage ? element.urlToImage : defaultImageUrl

                  return <NewsItem key={element.url} title={_title} description={_description} imageUrl={_imageUrl} readmore={element.url} author={element.author} date={element.publishedAt} />
                })
                }
              </div>
            </div>
          </InfiniteScroll>
          <ScrollToTop smooth />
        </div>
      </>
    )
  }
}

export default News;
