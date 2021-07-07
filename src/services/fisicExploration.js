import { genService } from "../utils/genService"
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
    return genService(url, 'get', headers, undefined)
  }

  getOneFisicData (patientID, fisicDataTitle) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    return genService(url, 'get', headers, undefined)
  }

  saveFisicData (patientID, info) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}`
    return genService(url, 'post', headers, info)
  }

  updateFisicData (patientID, fisicDataTitle, data) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    return genService(url, 'put', headers, data)
  }

  deleteFisicData (patientID, fisicDataTitle) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
    return genService(url, 'delete', headers, undefined)
  }
}