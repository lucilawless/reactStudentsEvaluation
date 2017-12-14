import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'

export class BatchPage extends PureComponent {
  // static propTypes = {
  //   batchNumber: PropTypes.number.isRequired,
  //   startedAt: PropTypes.date.isRequired,
  //   endAt: PropTypes.date.isRequired
  // }

  componentWillMount() {
    this.props.dispatch(fetchBatches())
  }

  render() {
    const { batchNumber } = this.props

    if (!batchNumber) return null

    return(
      <div className="batch page">
        <Title content={ batchNumber } />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { match }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === match.params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}


export default connect(mapStateToProps)(BatchPage)
