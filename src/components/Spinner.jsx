import React from 'react';

const Spinner = () => {
  return (
    <div className='text-center my-4'>
      <button className="btn btn-success" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    </div>
  )
}
export default Spinner;