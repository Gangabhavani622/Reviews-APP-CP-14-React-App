// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0, list: this.props}

  previousProfile = () => {
    const {index} = this.state

    if (index === 0) {
      this.setState({
        index: 0,
      })
    } else if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  nextProfile = () => {
    const {index, list} = this.state
    const maxLength = list.reviewsList.length

    if (index === maxLength - 1) {
      this.setState({
        index: maxLength - 1,
      })
    } else if (index < maxLength) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  render() {
    const {index, list} = this.state

    const reviewItem = list.reviewsList[index]

    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="cont">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-img" />
        <div className="button-cont">
          <button
            className="button"
            type="button"
            onClick={this.previousProfile}
            testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <p>{companyName}</p>
          <button
            className="button"
            type="button"
            onClick={this.nextProfile}
            testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
        <p>{username}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
