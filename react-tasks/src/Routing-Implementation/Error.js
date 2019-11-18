import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='text-center mt-5 text-danger'>
            <h1>404-Error Not-Found</h1>
            <h2>Page Does Not Exists</h2>
            <Link to='/home'>Go to home</Link>
        </div>
    )
}
export default Error;