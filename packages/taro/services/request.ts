import { request } from '@tarojs/taro'

export function doRequest(url: string, data?: any) {
  console.log('doRequest', data)
  return new Promise((resolve, reject) => {
    request({
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      url: 'http://127.0.0.1:5200/api/v0.1.0/' + url,
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
