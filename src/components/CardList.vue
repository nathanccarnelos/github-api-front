<template>
  <div class="ma-3">
    <v-btn
        :loading="loading"
        @click="$emit('show-click')"
        block
        primary
        v-if="!showList"
    >Buscar {{title}}
    </v-btn>
    <v-card
        v-else
        class="mx-auto"
        max-width="100%"
    >
      <v-list class="overflow-auto" dense height="50vh">
        <v-subheader>{{title}}</v-subheader>
        <v-list-item-group>
          <v-list-item
              :key="i"
              v-for="(val, i) in value"
          >
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{val.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'value', 'loading'],
  computed: {
    showList () {
      return !!this.value
    }
  }
}
</script>
