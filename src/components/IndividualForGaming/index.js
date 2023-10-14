import {Link} from 'react-router-dom'
import './index.css'

const IndividualForGaming = props => {
  const {eachdetail} = props
  const {title, thumbnailurl, viewcount, id} = eachdetail
  return (
    <Link to={`/videos/${id}`} className="individualgamingcard">
      <img
        src={thumbnailurl}
        className="individualgamingimage"
        alt="Gaming thumbnailurl"
      />
      <h2>{title}</h2>
      <p>{viewcount} World Wide Watching</p>
    </Link>
  )
}

export default IndividualForGaming
