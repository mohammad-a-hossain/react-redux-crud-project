import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getContact } from '../../redux/action'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

 const EditUser = () => {
    let { id } = useParams();
    //alert(id)
   //let history = useHistory()
   const dispatch = useDispatch()
   const users = useSelector((state) =>state.usersData.users)
   const [name, setFullName] = useState('')
   const [username, setUserName] =useState('')
   const [email, setEmail] =useState('')
   const [phone,setPhone] =useState('')
   const [website,setWebsite] =useState('')

   useEffect(() => {
    if (users != null) {
     setFullName(users.name);
      setPhone(users.phone);
      setEmail(users.email);
    }
    dispatch(getContact(id));
  }, [users]);

   const onUpdateUser=(e)=>{
     e.preventDefault()
     const updat_eUser =Object.assign(users, {
        name: name,
        phone: phone,
        email: email,
      });
    //  dispatch(updateUser(updat_eUser))
    //  history.push('/')
    // console.log(fullName,userName,email,phone,website)

   }
    return (
    <div className="container">
      <div className="card border-0 shadow mt-5 d-flex ">
          
        <div className="card-body">
            <h5 class="card-title">user form</h5>
          <form onSubmit={(e)=>onUpdateUser(e)}>
            <div class="form-group">
              <label for="exampleInputEmail1">full name</label>
              <input type="text" class="form-control" onChange={(e)=> setFullName(e.target.value) } value={name} placeholder="Enter full name"/>
              <small id="nameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">user name</label>
              <input type="text" class="form-control" onChange={(e)=>setUserName(e.target.value)} value={username} placeholder="Enter user name"/>
              <small id="userNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="text" class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">user phone</label>
              <input type="text" class="form-control" onChange={(e)=> setPhone(e.target.value)} value={phone} placeholder="Enter phone"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">website</label>
              <input type="text" class="form-control" value={website} onChange={(e)=>setWebsite(e.target.value)} placeholder="website"/>
            </div>
         <br></br>
            <button type="submit" class="btn btn-primary">Update user</button>
          </form>
          
         </div>
 
 
       </div>
       </div>
    )
}
export default EditUser