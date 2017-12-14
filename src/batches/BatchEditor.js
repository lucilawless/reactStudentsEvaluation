import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import CreateBatch from '../actions/batches/create'
import './BatchEditor.css'

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

  updateIntro(number, medium) {
    this.setState({
      batchNumber: number
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
    console.table(this.state)

    const batch = {
      ...this.state,
      batchNumber: toMarkdown(this.state.batchNumber)
    }

    console.table(batch)

    this.props.save(batch)
  }

  render() {
    return (
      <div className="editor">
      <h3>Add New Batch</h3>
      <label> Batch Number:
        <input
          type="number"
          ref="batchNumber"
          className="batchNumber"
          placeholder="Type the batch number"
          defaultValue={this.state.batchNumber}
          // onChange={this.updatebatchNumber.bind(this)}
          // onKeyUp={this.updatebatchNumber.bind(this)} />
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
          // onChange={this.updatestartedAt.bind(this)}
          // onKeyUp={this.updatestartedAt.bind(this)} />
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
          // onChange={this.updateendAt.bind(this)}
          // onKeyUp={this.updateendAt.bind(this)} />
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
