import axios from 'axios'
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

    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getTurn (turnID) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/turn/${turnID}`

    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }
  
  saveTurn (turn) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn'
    if (headers) {
      return axios.post(url, turn, { headers })
    } else {
      return axios.post(url, turn)
    }
  }

  updateTurn (turnID, turnUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn/' + turnID
    if (headers) {
      return axios.put(url, turnUpdate, { headers })
    } else {
      return axios.put(url, turnUpdate)
    }
  }

  deleteTurn (turnID) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/turn/' + turnID
    if (headers) {
      return axios.delete(url, { headers })
    } else {
      return axios.delete(url)
    }
  }
}