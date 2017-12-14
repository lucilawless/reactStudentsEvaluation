export const CREATE_BATCH = 'CREATE_BATCH'

export default (newbatch) => {
  return {
    type: CREATE_BATCH,
    payload: newbatch
  }
}
