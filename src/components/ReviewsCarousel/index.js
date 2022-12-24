// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0, list: this.props}

  previousProfile = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  nextProfile = () => {
    const {index, list} = this.state
    const maxLength = list.reviewsList.length

    if (index < maxLength) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  render() {
    const {index, list} = this.state
    const {reviewsList} = list

    const reviewItem = reviewsList[index]
    console.log(reviewItem)

    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="cont">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-img" />
        <div className="button-cont">
          <button
            testid="leftArrow"
            className="button"
            type="button"
            onClick={this.previousProfile}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <p>{companyName}</p>
          <button
            testid="rightArrow"
            className="button"
            type="button"
            onClick={this.nextProfile}
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
