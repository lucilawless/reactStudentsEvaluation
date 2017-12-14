import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import batchItem from './batchItem'
import './batchesContainer.css'

class batchesContainer extends PureComponent {
  renderbatch(batch, index) {
    return (
      <batchItem key={index} {...batch} />
    )
  }

  render() {
    const { batches } = this.props

    if (!batches) { return null }

    return(
      <div className="batchesContainer">
        <header>
          <Title content="All batches" />
        </header>

        <main>
          {batches.map(this.renderbatch)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps)(batchesContainer)
