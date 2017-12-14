import batches from  '../fixtures/batches'
import {
  FETCHED_BATCHES,
  CREATE_BATCH
} from '../actions/batches'

// const newId = (state) => {
//   const ids = state
//     .map((batch) => batch._id)
//     .sort()
//   return ['abcd', parseInt(ids[ids.length - 1].split('abcd')[1], 10) + 1].join('')
// }

export default (state = batches, {type, payload} = {}) => {
  switch(type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

    case CREATE_BATCH :
      return [{ ...payload }].concat(state)

    default :
      return state
  }
}
