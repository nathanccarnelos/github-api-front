<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-text-field
            outlined
            v-model="username"
            label="nome do usuário"
            :loading="loading"
            :disabled="loading"
        >
          <template #append-outer>
            <v-btn
              id="outer-search-btn"
              outlined
              @click="searchClicked()"
            >Buscar</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'UserSearch',
  props: ['value', 'loading'],
  computed:{
    username: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    searchClicked() {
      this.$emit('search-clicked')
    }
  }
}
</script>

<style>
  #outer-search-btn {
    padding: 2em;
    margin: -19px 0 0;
  }
</style>
