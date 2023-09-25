import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaSave} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import IndividualforTrending from '../IndividualforTrending'
import Header from '../Header'
import './index.css'

const SavedVideos = () => {
  const savedvideos = useSelector(state => state.savevideo)
  console.log(savedvideos)
  return (
    <div>
      <Header />
      <div className="tophomecontainer">
        <div className="home-section-small-size">
          <h1>small size</h1>
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
              <Link to="/savedviideos" className="links">
                <div className="links12">
                  <FaSave className="homeiconred" />
                  <h3 className="margintop">Saved Videos</h3>
                </div>
              </Link>
            </div>

            <div>
              <h3>CONTACT US</h3>
            </div>
          </div>

          <div className="right-side-home-contaier">
            {savedvideos.map(eachSimilarProduct => (
              <IndividualforTrending
                eachdetail={eachSimilarProduct}
                key={eachSimilarProduct.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedVideos
