import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <h1 className='mb-3'>NewsWorld - Top Headlines</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    )
  }
}

export default News
