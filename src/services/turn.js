import { genService } from "../utils/genService"
const { REACT_APP_API_URL } = process.env

export class Turn {
  token
  headers
  constructor () {
    this.token = localStorage.getItem('Token')
    if (this.token) {
      this.headers = { 'Authorization': 'Bearer ' + this.token }
    }
  }

  getTurns (amount, page) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/turn/find/${amount}/${page}`
    if (page) {
      url += '/' + page
    }
    return genService(url, 'get', headers, undefined)
  }

  getTurn (turnID) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/turn/${turnID}`
    return genService(url, 'get', headers, undefined)
  }
  
  saveTurn (turn) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn'
    return genService(url, 'post', headers, turn)
  }

  updateTurn (turnID, turnUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn/' + turnID
    return genService(url, 'put', headers, turnUpdate)
  }

  deleteTurn (turnID) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn/' + turnID
    return genService(url, 'delete', headers, undefined)
  }
}