import Api from '../api/'

export const getUserInfo = (store) => {
  Api.getUserInfo(store.state.userInfo.id).then(data => {
    store.dispatch('UPDATE_USER_INFO', {
      bio: data.bio
    })
  }, err => {
    location.replace('/api/login')
  })
}

export const updateUserBio = (store, bio) => {
  Api.updateUserBio(bio).then(data => {
    store.dispatch('UPDATE_USER_INFO', {
      bio: data.bio
    })
  })
}

export const updateList = (store, cb) => {
  Api.getWords(store.state.pageIndex).then(data => {
    store.dispatch('UPDATE_LIST', data)
    if (cb) cb(data)
  })
}