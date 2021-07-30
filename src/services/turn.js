import genService from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getTurns = (token, amount, page) => {
  let url = `${baseUrl}/turn/find/${amount}/${page}`
  if (page) {
    url += `/${page}`
  }
  return genService(url, 'get', token, undefined)
}

export const getTurn = (token, turnID) => {
  const url = `${baseUrl}/turn/${turnID}`
  return genService(url, 'get', token, undefined)
}

export const saveTurn = (token, turn) => {
  const url = `${baseUrl}/turn`
  return genService(url, 'post', token, turn)
}

export const updateTurn = (token, turnID, turnUpdate) => {
  const url = `${baseUrl}/turn/${turnID}`
  return genService(url, 'put', token, turnUpdate)
}

export const deleteTurn = (token, turnID) => {
  const url = `${baseUrl}/turn/${turnID}`
  return genService(url, 'delete', token, undefined)
}
