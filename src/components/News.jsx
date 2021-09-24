import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from 'react-scroll-to-top';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.progressBar(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.progressBar(40);
    let parsedData = await data.json();
    props.progressBar(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults)
    props.progressBar(100);
  }

  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsWorld`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };

  let defaultImageUrl = 'https://images.wsj.net/im-403222/social';
  return (
    <>
      <div className='pt-5'>
        <h1 className='text-center mt-4'>NewsWorld - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
              {!loading && articles.map((element) => {

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

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
