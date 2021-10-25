import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ModalTypes } from "../Constants";

const initialState: MainSlice = {
  newDietID: "",
  adminAccess: true,
  isModalOpen: { status: false, type: '', message: '' },
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
    }
  },
});

export const createNewUser = (data: { email?: string, dietId?: string, date?: string }) => (dispatch: any) => {
  axios.post(`${api}/adduser`, JSON.stringify(data), {
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

export const getCurrentUserRequestAction = (dietId : string) => (dispatch: any) => {
  axios.get(`${api}/users/${dietId}`)
    .then((response: any) => {
      if (response.status === 200) {
        dispatch(setModalOpenAction(
          {
            status: true,
            type: ModalTypes.info,
            message: JSON.stringify(response.data[0]),
          }
        ))
      }
    })
}

export const deleteCurrentUserAction = (dietId : string) => (dispatch: any) => {
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

export const addDietRequestAction = (data: { dietId?: string, count?: number}) => (dispatch: any) => {
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

export const { setNewDietId, setAdminAccessybility, setModalOpenAction } = mainSlice.actions;

export default mainSlice.reducer;
