import React from 'react';

const NewsItem = (props) => {
  const { title, description, imageUrl, readmore, author, date } = props;
  return (
    <div className='col my-3'>
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fs-6">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
        </div>
        <div className="card-footer border-0 bg-transparent d-grid">
          <a href={readmore} target='_blank' rel="noreferrer" className="btn btn-dark border-0 shadow-none">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;
