import { genService } from '../utils/genService'
const { REACT_APP_API_URL } = process.env

export const getTurns = (token, amount, page) => {
  let url = REACT_APP_API_URL + `/turn/find/${amount}/${page}`
  if (page) {
    url += '/' + page
  }
  return genService(url, 'get', token, undefined)
}

export const getTurn = (token, turnID) => {
  let url = REACT_APP_API_URL + `/turn/${turnID}`
  return genService(url, 'get', token, undefined)
}

export const saveTurn = (token, turn) => {
  const url = REACT_APP_API_URL + '/turn'
  return genService(url, 'post', token, turn)
}

export const updateTurn = (token, turnID, turnUpdate) => {
  const url = REACT_APP_API_URL + '/turn/' + turnID
  return genService(url, 'put', token, turnUpdate)
}

export const deleteTurn = (token, turnID) => {
  const url = REACT_APP_API_URL + '/turn/' + turnID
  return genService(url, 'delete', token, undefined)
}
  