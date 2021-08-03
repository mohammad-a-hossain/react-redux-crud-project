import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
    return (
        <div className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary pd-3">
            <div className='container'>
           
            <Link to='/'><a href="#home" className='navbar-brand'>User crud app</a></Link>
                <div>
                   <Link to='/components/add/' className='btn btn-light ml-auto btn-success'>add user</Link> 
                </div>
                
            </div>
          
        </div>
    )
}
export default Navber