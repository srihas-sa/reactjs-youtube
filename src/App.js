import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
    </Switch>
  </BrowserRouter>
)

export default App
