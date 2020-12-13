<template>
  <div class="home">
    <user-search @search-clicked="searchUser()" v-model="username" :loading="loading"></user-search>
    <v-container >
      <v-alert v-if="showError" type="warning">Nenhum Resultado encontrado, tente novamente</v-alert>
      <v-card v-if="result && !loading">
        <v-card-title>
          <v-avatar>
            <img
                :alt="result.login + ' avatar'"
                :src="result['avatar_url']"
            >
          </v-avatar>
          <div class="pl-4" data-testid="user-name">{{result.name}}</div>
        </v-card-title>
        <action-buttons :username="username" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import UserSearch from '../components/UserSearch'
import { getUser } from '../services/users'
import ActionButtons from '../components/ActionButtons'

export default {
  name: 'Home',
  components: {
    ActionButtons,
    UserSearch
  },
  data () {
    return {
      result: null,
      repos: [],
      username: '',
      loading: false,
      showError: false
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
      this.showError = false
      this.result = null
      getUser(this.username)
        .then(resp => {
          this.result = resp
        })
        .catch((err) => {
          if(err.response.status === 404) this.showError = true
        })
      .finally(()=> {
        this.loading = false
      })
    }
  }
}
</script>
