import './index.css'

const IndividualForGaming = props => {
  const {eachdetail} = props
  const {title, thumbnailurl, viewcount, id} = eachdetail
  return (
    <div className="individualgamingcard">
      <img
        src={thumbnailurl}
        className="individualgamingimage"
        alt="Gaming thumbnailurl"
      />
      <h2>{title}</h2>
      <p>{viewcount} World Wide Watching</p>
    </div>
  )
}

export default IndividualForGaming
