<template>
  <div class="ma-3">
    <v-btn
        :loading="loading"
        @click="getStaredList()"
        v-if="!showList"
    >Ver starred
    </v-btn>
    <search-result-list :value="starredList" title="Starred" v-else/>
  </div>
</template>
<script>
import { getStarred } from '../services/users'
import SearchResultList from './CardList'

export default {
  name: 'StarredList',
  components: {
    SearchResultList
  },
  data () {
    return {
      showList: false,
      starredList: [],
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
    getStaredList () {
      this.loading = true
      getStarred(this.username)
        .then((resp) => {
          this.starredList = resp
          this.showList = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
