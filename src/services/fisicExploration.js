import axios from 'axios'
const { REACT_APP_API_URL } = process.env

export class FisicExploration {
  token
  headers
  constructor () {
    this.token = localStorage.getItem('Token')
    if (this.token) {
      this.headers = { 'Authorization': 'Bearer ' + this.token }
    }
  }

  getFisicData (patientID) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}`
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getOneFisicData (patientID, fisicDataTitle) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    if (headers) {
      return axios.get(url, { info }, { headers })
    } else {
      return axios.get(url, { info })
    }
  }

  saveFisicData (patientID, info) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}`
    if (headers) {
      return axios.post(url, { info }, { headers })
    } else {
      return axios.post(url, { info })
    }
  }

  updateFisicData (patientID, fisicDataTitle, data) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    if (headers) {
      return axios.post(url, data, { headers })
    } else {
      return axios.post(url, data)
    }
  }

  deleteFisicData (patientID, fisicDataTitle) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    if (headers) {
      return axios.delete(url, { headers })
    } else {
      return axios.delete(url)
    }
  }
}