import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import store from './store/store'
import SavedVideos from './components/SavedVideos'

import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/savedviideos" component={SavedVideos} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

export default App
