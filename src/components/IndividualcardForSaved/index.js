import {MdDelete} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
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
    <Link to={`/videos/${id}`} className="individualtrendingcard1">
      <img
        src={thumbnailurl}
        alt="video thumbnail"
        className="individualtrendingcardimage12"
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
    </Link>
  )
}

export default IndividualcardforSaved
