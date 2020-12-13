<template>
  <v-row>
    <v-col sm="6">
      <card-list :loading="loadingRepos" :value="reposList" @show-click="getReposList()" title="Repos"/>
    </v-col>
    <v-col sm="6">
      <card-list :loading="loadingStarred" :value="starredList" @show-click="getStarredList()" title="Starred"/>
    </v-col>
  </v-row>
</template>
<script>
import CardList from './CardList'
import { getRepos, getStarred } from '../services/users'

export default {
  name: 'ActionButtons',
  components: {
    CardList
  },
  data () {
    return {
      loadingRepos: false,
      loadingStarred: false,
      reposList: null,
      starredList: null,
    }
  },
  props: ['username'],
  methods: {
    getReposList () {
      this.loadingRepos = true
      getRepos(this.username)
        .then((resp) => {
          this.reposList = resp
        })
        .finally(() => {
          this.loadingRepos = false
        })
    },
    getStarredList () {
      this.loadingStarred = true
      getStarred(this.username)
        .then((resp) => {
          this.starredList = resp
        })
        .finally(() => {
          this.loadingStarred = false
        })
    }
  }
}
</script>
