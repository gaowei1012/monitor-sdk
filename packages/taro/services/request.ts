import { request } from '@tarojs/taro'
import config from '../../common/config'

export function doRequest(url: string, data?: any) {
  console.log('doRequest', data)
  return new Promise((resolve, reject) => {
    request({
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      url: config.baseUrl + url,
      data: typeof data == 'object' ? JSON.stringify(data) : ''
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
