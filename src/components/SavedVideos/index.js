import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {
  AiFillHome,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'
import {FaHotjar, FaSave, FaFacebook} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdDelete} from 'react-icons/md'
import IndividualcardforSaved from '../IndividualcardForSaved'
import Header from '../Header'
import './index.css'

const SavedVideos = () => {
  const savedvideos = useSelector(state => state.savevideo)
  console.log(savedvideos)
  const condition = savedvideos.length > 0
  console.log(condition)
  return condition ? (
    <div>
      <Header />
      <div className="tophomecontainer">
        <div className="home-section-small-size">
          {savedvideos.map(eachSimilarProduct => (
            <IndividualcardforSaved
              eachdetail={eachSimilarProduct}
              key={eachSimilarProduct.id}
            />
          ))}
        </div>

        <div className="home-section-medium-size">
          <div className="left-side-home-contaier">
            <div>
              <Link to="/" className="links">
                <div className="links1">
                  <AiFillHome className="homeicon" />
                  <h3 className="margintop">Home</h3>
                </div>
              </Link>
              <Link to="/trending" className="links">
                <div className="links1">
                  <FaHotjar className="homeicon" />
                  <h3 className="margintop">Trending</h3>
                </div>
              </Link>
              <Link to="/gaming" className="links">
                <div className="links1">
                  <SiYoutubegaming className="homeicon" />
                  <h3 className="margintop">Gaming</h3>
                </div>
              </Link>
              <Link to="/savedvideos" className="links">
                <div className="links12">
                  <FaSave className="homeiconred" />
                  <h3 className="margintop">Saved Videos</h3>
                </div>
              </Link>
            </div>

            <div>
              <h3>CONTACT US</h3>
              <div>
                <FaFacebook size={30} className="marginss1" />
                <AiFillInstagram size={30} className="marginss2" />
                <AiFillTwitterCircle size={30} className="marginss3" />
                <AiFillLinkedin size={30} className="marginss4" />
              </div>
              <h3>Enjoy! Now To See Your Channels and Recommendations</h3>
            </div>
          </div>

          <div className="right-side-home-contaier">
            {savedvideos.map(eachSimilarProduct => (
              <IndividualcardforSaved
                eachdetail={eachSimilarProduct}
                key={eachSimilarProduct.id}
              />
            ))}
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="tophomecontainer">
      <Header />
      <div className="home-section-small-size">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          className="novideosviewforPhone"
        />
      </div>
      <div className="home-section-medium-size">
        <div className="left-side-home-contaier">
          <div>
            <Link to="/" className="links">
              <div className="links1">
                <AiFillHome className="homeicon" />
                <h3 className="margintop">Home</h3>
              </div>
            </Link>
            <Link to="/trending" className="links">
              <div className="links1">
                <FaHotjar className="homeicon" />
                <h3 className="margintop">Trending</h3>
              </div>
            </Link>
            <Link to="/gaming" className="links">
              <div className="links1">
                <SiYoutubegaming className="homeicon" />
                <h3 className="margintop">Gaming</h3>
              </div>
            </Link>
            <Link to="/savedvideos" className="links">
              <div className="links12">
                <FaSave className="homeiconred" />
                <h3 className="margintop">Saved Videos</h3>
              </div>
            </Link>
          </div>

          <div>
            <h3>CONTACT US</h3>
            <div>
              <FaFacebook size={30} className="marginss1" />
              <AiFillInstagram size={30} className="marginss2" />
              <AiFillTwitterCircle size={30} className="marginss3" />
              <AiFillLinkedin size={30} className="marginss4" />
            </div>
            <h3>Enjoy! Now To See Your Channels and Recommendations</h3>
          </div>
        </div>

        <div className="right-side-home-contaier">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="No Videos"
            className="novideosview"
          />
        </div>
      </div>
    </div>
  )
}

export default SavedVideos
