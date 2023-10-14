// themeSlice.js
"
import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light', // 'light' or 'dark'
  },
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const {toggleTheme} = themeSlice.actions
export const selectThemeMode = state => state.theme.mode
export default themeSlice.reducer
" 