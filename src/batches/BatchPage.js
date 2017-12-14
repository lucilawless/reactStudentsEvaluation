import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchbatches } from '../actions/batches'
import Title from '../components/Title'

export class batchPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.dispatch(fetchbatches())
  }

  render() {
    const { title } = this.props

    if (!title) return null

    return(
      <div className="batch page">
        <Title content={ title } />
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


export default connect(mapStateToProps)(batchPage)
