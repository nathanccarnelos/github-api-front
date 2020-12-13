<template>
  <div class="home">
    <user-search @search-clicked="searchUser()" v-model="username" :loading="loading"></user-search>
    <v-container v-if="result && !loading">
      <v-card>
        <v-card-title>
          <v-avatar>
            <img
                :alt="result.login + ' avatar'"
                :src="result['avatar_url']"
            >
          </v-avatar>
          <v-icon>fa-github</v-icon>
          <div class="pl-4">{{result.name}}</div>
        </v-card-title>
        <v-row>
          <v-col sm="6">
            <repos-list :username="username"></repos-list>
          </v-col>
          <v-col sm="6">
            <starred-list :username="username"/>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import UserSearch from '../components/UserSearch'
import { getUser } from '../services/users'
import StarredList from '../components/StarredList'
import ReposList from '../components/ReposList'

export default {
  name: 'Home',
  components: {
    UserSearch,
    StarredList,
    ReposList
  },
  data () {
    return {
      result: null,
      repos: [],
      username: '',
      loading: false
    }
  },
  mounted () {
    if (this.$route.params.userName) {
      this.username = this.$route.params.userName
      this.searchUser()
    }
  },
  methods: {
    searchUser () {
      this.loading = true
      getUser(this.username)
        .then(resp => {
          this.result = resp
        })
        .catch(err => {
          console.log(err)
        })
      .finally(()=> {
        this.loading = false
      })
    }
  }
}
</script>
