export const userInfo = state => {
  state.userInfo.avatarUrl = state.userInfo.id ? `http://tp4.sinaimg.cn/${state.userInfo.id}/180/1` : 'http://tp4.sinaimg.cn/2427441943/180/1'
  return state.userInfo
}

export const userId = state => {
  return state.userInfo.id
}

export const wordsList = state => {
  return state.list
}
