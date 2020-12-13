<template>
  <div class="ma-3">
    <v-btn
        :loading="loading"
        @click="getReposList()"
        v-if="!showList"
    >Ver Repos
    </v-btn>
    <search-result-list v-else :value="reposList" title="Repos" />
  </div>
</template>
<script>
import { getRepos } from '../services/users'
import SearchResultList from './CardList'

export default {
  name: 'StarredList',
  components: {
    SearchResultList
  },
  data () {
    return {
      showList: false,
      reposList: [],
      loading: false
    }
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
  methods: {
    getReposList () {
      this.loading = true
      getRepos(this.username)
        .then((resp) => {
          this.reposList = resp
          this.showList = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
