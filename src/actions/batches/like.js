export const TOGGLE_LIKE_batch = 'TOGGLE_LIKE_batch'

export default (batchId) => ({
  type: TOGGLE_LIKE_batch,
  payload: batchId
})
