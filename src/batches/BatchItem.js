import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './BatchItem.css'

const PLACEHOLDER = 'http://res.cloudinary.com/di7m4tijz/image/upload/v1513250881/admission-cta-ClassProfile_ojwzcg.png'

class BatchItem extends PureComponent {
  static propTypes = {
    batchNumber: PropTypes.number.isRequired,
    startedAt: PropTypes.date,
    endAt: PropTypes.date
  }


  render() {
    const { _id, batchNumber, startedAt, endAt, photo } = this.props

    return(
      <article className="batchItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <Link to={`/batches/${_id}`}>
            <p>Batch #{batchNumber}</p>
          </Link>
        </header>

        <div>
          <label><p>Starts at: {startedAt}</p></label>
          <label><p>Ends at: {endAt}</p></label>
        </div>
      </article>
    )
  }
}


export default connect(null)(BatchItem)
