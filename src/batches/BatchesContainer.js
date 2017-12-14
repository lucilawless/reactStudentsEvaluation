import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'
import BatchItem  from './BatchItem'
import BatchEditor from './BatchEditor'
import './BatchesContainer.css'

class BatchesContainer extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchBatches())
  }

  renderBatch(batch, index) {
    return (
      <BatchItem key={index} {...batch} />
    )
  }

  render() {
    const { batches } = this.props

    if (!batches) { return null }

    return(
      <div className="batchesContainer">
        <header>
          <Title content="Current Classes" />
        </header>

        <main>
          {batches.map(this.renderBatch.bind(this))}
        </main>
        <BatchEditor />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps)(BatchesContainer)
