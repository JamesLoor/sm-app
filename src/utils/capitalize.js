const capitalize = (string) => {
  return string.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
    return p1 + p2.toUpperCase()
  })
}

export default capitalize
