import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, readmore } = this.props;
    return (
      <div className='col my-3'>
        <div className="card h-100">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fs-6">{description}</p>
          </div>
          <div className="card-footer border-0 bg-transparent d-grid">
            <a href={readmore} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
