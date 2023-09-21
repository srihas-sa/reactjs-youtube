import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaSave} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import ReactIcons from '../ReactIcons'
import Header from '../Header'
import IndividualforTrending from '../IndividualforTrending'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingvideolist: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getFormattedData1 = data => ({
    name: data.name,
    profileimageurl: data.profile_image_url,
  })

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(videos => ({
        id: videos.id,
        title: videos.title,
        thumbnailurl: videos.thumbnail_url,
        channel: this.getFormattedData1(videos.channel),
        viewcount: videos.view_count,
        publishedat: videos.published_at,
      }))
      console.log(updatedData)

      this.setState({
        trendingvideolist: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <button type="button" className="button">
        Continue Shopping
      </button>
    </div>
  )

  renderTrendingVideosview = () => {
    const {trendingvideolist} = this.state
    return (
      <div className="tophomecontainer">
        <Header />
        <div className="home-section-small-size">
          {trendingvideolist.map(eachvideo => (
            <IndividualforTrending key={eachvideo.id} eachdetail={eachvideo} />
          ))}
        </div>

        <div className="home-section-medium-size">
          <div className="left-side-home-contaier1">
            <div>
              <Link to="/" className="links">
                <div className="links1">
                  <AiFillHome className="homeicon" />
                  <h3>Home</h3>
                </div>
              </Link>
              <Link to="/trending" className="links">
                <div className="links12">
                  <FaHotjar className="homeiconred" />
                  <h3>Trending</h3>
                </div>
              </Link>
              <Link to="/gaming" className="links">
                <div className="links1">
                  <SiYoutubegaming className="homeicon" />
                  <h3>Gaming</h3>
                </div>
              </Link>
              <Link to="/savedviideos" className="links">
                <div className="links1">
                  <FaSave className="homeicon" />
                  <h3>Saved Videos</h3>
                </div>
              </Link>
            </div>

            <div>
              <h3>CONTACT US</h3>
            </div>
          </div>

          <div className="right-side-home-contaier1">
            <div className="alignment1">
              {trendingvideolist.map(eachvideo => (
                <IndividualforTrending
                  key={eachvideo.id}
                  eachdetail={eachvideo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  getalltrendingvideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosview()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {videosList} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    console.log(videosList)

    return (
      <div className="all-products-section">{this.getalltrendingvideos()}</div>
    )
  }
}
export default Trending