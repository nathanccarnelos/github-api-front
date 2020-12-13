import axios from 'axios'

const BASE_PATH = 'https://api.github.com/'
const USERS_PATH = BASE_PATH + 'users/'

export function getUser(userName){
  return axios.get(USERS_PATH + userName)
    .then((resp) => {
      if(resp.status === 200) return Promise.resolve(resp.data)
    })
}

export function getRepos(userName){
  return axios.get(`${USERS_PATH}${userName}/repos`)
    .then((resp) => {
      if(resp.status === 200) return Promise.resolve(resp.data)
    })
}


export function getStarred(userName){
  return axios.get(`${USERS_PATH}${userName}/starred`)
    .then((resp) => {
      if(resp.status === 200) return Promise.resolve(resp.data)
    })
}

