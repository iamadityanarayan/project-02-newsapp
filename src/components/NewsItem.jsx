import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div className='col'>
        <div className="card bg-dark h-100">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/news" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
