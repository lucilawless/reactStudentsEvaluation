import ApiClient from '../../api/client'
// import loading from '../loading' // ???
// import loadError from '../loadError' // ???
export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.get('batches')
      .then(res => dispatch({ type: FETCHED_BATCHES, payload: res.body }))
      //.catch(err => dispatch(loadError(err))) ???

    // dispatch(loading(false)) // ???
  }
}
