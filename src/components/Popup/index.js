function Popup(props) {
  const {title, message, onClose} = props
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  )
}

export default Popup
