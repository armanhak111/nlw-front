import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ModalTypes } from "../Constants";

const initialState: MainSlice = {
  newDietID: "",
  adminAccess: true,
  isModalOpen: { status: false, type: '', message: '' },
  loader: false,
  currentUser: false
};

const api = 'https://safe-wave-11883.herokuapp.com/api'

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setNewDietId: (state, action) => {
      return {
        ...state,
        newDietID: action.payload,
      };
    },
    setAdminAccessybility: (state, action) => {
      return {
        ...state,
        adminAccess: action.payload
      }
    },
    setModalOpenAction: (state, action) => {
      return {
        ...state,
        isModalOpen: action.payload
      }
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loader: action.payload
      }
    },
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload
      }
    },
  },
});

export const createNewUser = (data: any, idAdmin?:boolean) => (dispatch: any) => {
  axios.post(`${api}/adduser`, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response: any) => {
      if (response.status === 200) {
        if(idAdmin){
          dispatch(setModalOpenAction(
            {
              status: true,
              type: ModalTypes.info,
              message: response.data.message
            }
          ))
        }        
      }
    })
}

export const getCurrentUserRequestAction = (dietId: string, history?: any, isAdmin?:boolean) => (dispatch: any) => {
  dispatch(setCurrentUser(false))
  dispatch(setLoading(true))
  axios.get(`${api}/users/${dietId}`)
    .then((response: any) => {
      if (response.status === 200) {
        if (isAdmin) {
          dispatch(setModalOpenAction(
            {
              status: true,
              type: ModalTypes.info,
              message: JSON.stringify(response.data),
            }
          ))
        }
        dispatch(setCurrentUser(response.data))
        if(history && response.data && !isAdmin){
          // history.push(`/user-profile/${response.data.dietId}`)
          localStorage.setItem('USER',JSON.stringify(response.data.dietId))
        }
      }
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

export const deleteCurrentUserAction = (dietId: string) => (dispatch: any) => {
  axios.delete(`${api}/users/${dietId}`)
    .then((response: any) => {
      if (response.status === 200) {
        dispatch(setModalOpenAction(
          {
            status: true,
            type: ModalTypes.info,
            message: response.data.message,
          }
        ))
      }
    })
}

export const addDietRequestAction = (data: { dietId?: string, count?: number }) => (dispatch: any) => {
  axios.put(`${api}/users`, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response: any) => {
      if (response.status === 200) {
        dispatch(setModalOpenAction(
          {
            status: true,
            type: ModalTypes.info,
            message: response.data.message
          }
        ))
      }
    })
}

export const { setLoading, setCurrentUser, setNewDietId, setAdminAccessybility, setModalOpenAction } = mainSlice.actions;

export default mainSlice.reducer;
