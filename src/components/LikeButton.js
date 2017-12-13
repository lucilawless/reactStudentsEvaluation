// src/components/LikeButton.js
import React, { PureComponent } from 'react'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  state = { liked: false }

  classNames() {
    const { liked } = this.state

    let classes = 'LikeButton'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const { liked } = this.state

    return (
      <p className={ this.classNames() }>
        <button onClick={this.toggleLike}>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
