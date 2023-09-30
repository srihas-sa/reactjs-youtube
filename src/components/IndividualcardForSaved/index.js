import {MdDelete} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import {deleteItem} from '../../store/savedvideoSlice'
import './index.css'

const IndividualcardforSaved = props => {
  const {eachdetail} = props
  const {title, thumbnailurl, channel, viewcount, publishedat, id} = eachdetail
  const {name, profileimageurl} = channel

  const dispatch = useDispatch()

  const occlickDeleteButton = () => {
    console.log(id)
    dispatch(deleteItem(id))
  }

  return (
    <div className="individualtrendingcard1">
      <img
        src={thumbnailurl}
        alt="video thumbnail"
        className="individualtrendingcardimage1"
      />
      <div className="titlecenter1123">
        <h2>{title}</h2>

        <h3 className="channelname1123">{name}</h3>
        <div className="viewsanddate">
          <p className="viewcount1">{viewcount} Views</p>
          <p> • {publishedat}</p>
        </div>
      </div>
      <div>
        <MdDelete
          size={30}
          className="topmargin"
          onClick={occlickDeleteButton}
        />
      </div>
    </div>
  )
}

export default IndividualcardforSaved
