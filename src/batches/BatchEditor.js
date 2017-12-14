import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import CreateBatch from '../actions/batches/create'
import './BatchEditor.css'
import Title from '../components/Title'

class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { _id, batchNumber, startedAt, endAt } = props

    this.state = {
      batchNumber,
      startedAt,
      endAt
    }
  }

  updateBatchNumber(number, medium) {
    this.setState({
      batchNumber: number
    })
  }

  updateStartAt(date, medium) {
    this.setState({
      startedAt: date
    })
  }

  updateEndsAt(date, medium) {
    this.setState({
      endAt: date
    })
  }


  setType(event) {
    this.setState({
      batchNumber: this.refs.batchNumber.value,
      startedAt: this.refs.startedAt.value,
      endAt: this.refs.endAt.value

    })
  }

  saveBatch() {
    const { batchNumber, startedAt, endAt } = this.state
    const batch = { batchNumber, startedAt, endAt }
    console.table(this.state)

    console.table(batch)

    this.props.save(batch)
  }

  render() {
    return (
      <div className="editor">
      <h4><Title content="Add New Batch" /></h4>
      <label> Batch Number:
        <input
          type="number"
          ref="batchNumber"
          className="batchNumber"
          placeholder="Type the batch number"
          defaultValue={this.state.batchNumber}
          />
      </label>
      <br />
      <label> Starts at:
        <input
          type="date"
          ref="startedAt"
          className="startedAt"
          placeholder="Type the start date"
          defaultValue={this.state.startedAt}
          />
      </label>
      <br />
      <label> Ends at:
        <input
          type="date"
          ref="endAt"
          className="endAt"
          placeholder="Type the end date"
          defaultValue={this.state.endAt}
        />
      </label>
      <br />
        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: CreateBatch }

export default connect(null, mapDispatchToProps)(BatchEditor)
