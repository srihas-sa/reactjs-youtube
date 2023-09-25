import {configureStore} from '@reduxjs/toolkit'
import savedvideoSlice from './savedvideoSlice'

const store = configureStore({
  reducer: {
    savevideo: savedvideoSlice,
  },
})

export default store
