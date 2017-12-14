import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchesContainer from './batches/BatchesContainer'
// import batchPage from './batches/batchPage'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div> // <Route path="/batches/:batchId" component={batchPage} />
    )
  }
}
