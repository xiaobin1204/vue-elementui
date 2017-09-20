export const apiDomain = 'http://192.168.33.70:9003/api/'
export const loginUrl = apiDomain + 'getToken'
export const userUrl = apiDomain + 'getUser'

// 获取用户资料请求头
export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
