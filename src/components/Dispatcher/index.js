import {useDispatch} from 'react-redux'
import {add} from '../../store/savedvideoSlice'

const Dispatcher = props => {
  const videodata = {id: 1, name: 'srihas'}
  console.log(videodata)
  const dispacher = useDispatch()
  console.log(videodata)
  dispacher(add(videodata))
  return <div>edkcmmc</div>
}

export default Dispatcher
