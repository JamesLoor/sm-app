const capitalize = string => {
  return string.replace(/(^|\s)([a-z])/g, (m, p1, p2) => {
    return p1 + p2.toUpperCase()
  })
}

export default capitalize
