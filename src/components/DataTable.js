import React from 'react'
import { useSelector } from 'react-redux'

export const DataTable = () => {
    const users = useSelector(state =>state.users)
    console.log(users)
    return (
        <div className='container mt-3'>
            <h2 className='text-uppercase' >User information</h2><hr/>
            <table className="table table-striped table-hover table-light">
                <thead>
                    <tr>
                        <th>
                            <div>
                        <input type="checkbox"></input>
                        <label for=""></label>
                            </div>
                        </th>
                    <th scope="col">name</th>
                    <th scope="col">user name</th>
                    <th scope="col">email</th>
                    <th scope="col">phone</th>
                    <th scope="col">website</th>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                   { users.map((user)=>(
                        <tr>
                    <th scope="row">
                    <input type="checkbox"></input>
                    </th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td className="d-flex justify-content-between" >
                     <button className='btn btn-success'>edit</button>
                     <button className='btn btn-danger'>delete</button>
                    </td>

                    </tr>
                   ))}
                   
                </tbody>
            </table>
            <div  className="container d-flex justify-content-between ">
                      <button className="btn btn-primary">selected item 10</button><button  className='btn btn-warning text-color-warning'>clear all</button>
                  </div>
            
        </div>
    )
}
