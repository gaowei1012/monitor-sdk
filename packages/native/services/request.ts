import axios, { Method } from 'axios'
import config from '../../common/config'

type Option = {
  url: string
  data?: any
  method?: Method
}

export const request = (option: Option, __callback: string) => {
  const { url, data, method } = option
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: config.baseUrl + url,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
