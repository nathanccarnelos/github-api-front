<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" data-testid="search-field">
        <v-text-field
            outlined
            v-model="username"
            label="nome do usuário"
            :loading="loading"
            :disabled="loading"
        >
          <template #append-outer>
            <v-btn
              data-testid="search-button"
              id="outer-search-btn"
              outlined
              @click="emitSearchClicked()"
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
  mounted () {
    addEventListener('keypress', ({key}) => {
      if(key==='Enter') this.emitSearchClicked()
    })
  },
  methods: {
    emitSearchClicked() {
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
