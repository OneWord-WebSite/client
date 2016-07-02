import weibo from './weibo'

var ajax = (method, url, data = null, headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}) => {

  let p = fetch(url, {
    method: method,
    headers: headers,
    credentials: 'same-origin',
    body: data
  }).then(res => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        resolve(res.json())
      } else {
        reject(res)
      }
    }) 
  })
  return p
}

var api = {}

api.getUserInfo = id => ajax('GET', `/api/users/${id}`)

api.getWeiboNickname = id => ajax('GET', `/api/weibo/users/${id}`)

api.updateUserBio = bio => ajax('PUT', '/api/users/bio', JSON.stringify({bio}))

api.getUserShare = id => ajax('GET', `/api/users/${id}/share`)

api.getUserFavour = id => ajax('GET', `/api/users/${id}/favour`)

api.addWord = data => ajax('POST', '/api/words', data, {'Accept': 'application/json'})

api.getWords = pageIndex => ajax('GET', `/api/words?page=${pageIndex}`)

api.getWord = id => ajax('GET', `/api/words/${id}`)

api.praiseUp = data => ajax('POST', '/api/praise', JSON.stringify(data))

api.praiseDown = data => ajax('DELETE', '/api/praise', JSON.stringify(data))

api.adminGetWords = () => ajax('GET', '/api/admin/words')

api.adminValidWord = id => ajax('PATCH', `/api/admin/words/${id}`)

api.adminUnvalidWord = id => ajax('DELETE', `/api/admin/words/${id}`)

export default api