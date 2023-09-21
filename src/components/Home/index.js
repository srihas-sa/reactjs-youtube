import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaSave} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {ImCross} from 'react-icons/im'

import ReactIcons from '../ReactIcons'
import Header from '../Header'

import Individualcard from '../Individualcard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchinput: '',
    onclicking: false,
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
    const {searchinput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchinput}`
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
        videosList: updatedData,
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

  cickingSearch = event => {
    this.setState({searchinput: event.target.value})
  }

  clickinglabel = () => {
    this.getProducts()
  }

  Onclickingcrossmark = () => {
    const {onclicking} = this.state
    this.setState({onclicking: !onclicking})
  }

  render() {
    const {videosList, onclicking} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    console.log(videosList)

    return (
      <div className="tophomecontainer">
        <Header />
        <div className="home-section-small-size">
          <div className="background-color1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              className="logoimage"
              alt="website-logo"
            />
            <h2>ddwcwb</h2>
            <h1>Buy NxtWatch prepaid plans with upi</h1>
          </div>
          <div className="searchinh">
            <input
              type="text"
              id="hello"
              placeholder="Search"
              onChange={this.cickingSearch}
            />
            <label
              htmlFor="hello"
              className="backgrrrr"
              onClick={this.clickinglabel}
            >
              <ReactIcons />
            </label>
          </div>
          {videosList.map(eachvideo => (
            <Individualcard key={eachvideo.id} eachdetail={eachvideo} />
          ))}
        </div>

        <div className="home-section-medium-size">
          <div className="left-side-home-contaier">
            <div>
              <Link to="/" className="links">
                <div className="links12">
                  <AiFillHome className="homeiconred" />
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
                <div className="links1">
                  <FaSave className="homeicon" />
                  <h3 className="margintop">Saved Videos</h3>
                </div>
              </Link>
            </div>

            <div>
              <h3>CONTACT US</h3>
            </div>
          </div>

          <div className="right-side-home-contaier">
            {onclicking ? (
              <h1>Thank You</h1>
            ) : (
              <div className="background-color">
                <div className="image-cross">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    className="logoimage"
                    alt="website-logo"
                  />
                  <ImCross onClick={this.Onclickingcrossmark} />
                </div>
                <h3>
                  Buy NxtWatch Premium prepaid plans with <br />
                  UPI
                </h3>
                <button type="button" className="buttonbuyNow">
                  Get It Now
                </button>
              </div>
            )}
            <div className="searchinh">
              <input
                type="text"
                id="hello"
                placeholder="Search"
                onChange={this.cickingSearch}
              />
              <label
                htmlFor="hello"
                className="backgrrrr"
                onClick={this.clickinglabel}
              >
                <ReactIcons />
              </label>
            </div>
            <div className="alignment2">
              <div className="alignment">
                {videosList.map(eachvideo => (
                  <Individualcard key={eachvideo.id} eachdetail={eachvideo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
