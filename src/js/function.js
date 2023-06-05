export function createId(curdId, index) {
  const number = (8 * (curdId + 1))
  const newId = number + index
  return newId
}
