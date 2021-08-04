import {CREATEUSER} from './actionType'

export const addUser = (users)=>{
    return{
      type:CREATEUSER,
      payload:users,
    }
  }