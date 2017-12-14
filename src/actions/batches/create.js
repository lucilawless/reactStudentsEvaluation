export const CREATE_BATCH = 'CREATE_BATCH'

export default (newBatch) => {
  return {
    type: CREATE_BATCH,
    payload: newBatch
  }
}
