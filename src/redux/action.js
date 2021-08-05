import {CREATEUSER,GET_CONTACT} from './actionType'

export const addUser = (users)=>{
    return{
      type:CREATEUSER,
      payload:users,
    }
  }
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
  });
  // update a contact
/* export const updateContact = (users) => ({
  type: UPDATE_CONTACT,
  payload: users,
});
 */