import {createSlice, nanoid} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'

const initialState = []

const savedvideoSlice = createSlice({
  name: 'savedvideos',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    deleteItem(state, action) {
      const itemId = action.payload
      console.log(state)
      state.filter(item => item.id !== itemId.id)
      console.log(state.savedvideos)
    },
  },
})

export const {add, deleteItem} = savedvideoSlice.actions
export default savedvideoSlice.reducer
