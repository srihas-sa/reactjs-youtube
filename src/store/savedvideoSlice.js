import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = []

const savedvideoSlice = createSlice({
  name: 'savedvideos',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
  },
})

export const {add} = savedvideoSlice.actions
export default savedvideoSlice.reducer
