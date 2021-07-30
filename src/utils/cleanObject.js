/* eslint-disable no-restricted-syntax */
const cleanObject = (object) => {
  const objectCleaned = {}
  for (const key in object) {
    if (object[key] !== '') {
      objectCleaned[key] = object[key]
    }
  }
  return objectCleaned
}

export default cleanObject
