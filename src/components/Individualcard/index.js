import './index.css'

const Individualcard = props => {
  const {eachdetail} = props
  const {title, thumbnailurl, channel, viewcount, publishedat, id} = eachdetail
  const {name, profileimageurl} = channel
  return (
    <div className="individualcard">
      <img
        src={thumbnailurl}
        alt="video thumbnail"
        className="individualcardimage"
      />
      <div className="titlecenter123">
        <img
          src={profileimageurl}
          alt="channel logo"
          className="channellogoimage"
        />
        <h2>{title}</h2>
      </div>
      <h3 className="channelname">{name}</h3>
      <div className="titlecenter">
        <p className="viewcount">{viewcount} Views</p>
        <p> • {publishedat}</p>
      </div>
    </div>
  )
}

export default Individualcard
