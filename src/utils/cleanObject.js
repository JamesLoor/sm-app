export const cleanObject = (object) => {
  let objectCleaned = {}
  for (const key in object) {
    if(object[key] !== '') {
      objectCleaned[key] = object[key]
    }
  }
  return objectCleaned
}