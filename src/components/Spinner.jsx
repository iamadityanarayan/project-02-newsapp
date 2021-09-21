import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <button className="btn btn-success" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      </div>
    )
  }
}
