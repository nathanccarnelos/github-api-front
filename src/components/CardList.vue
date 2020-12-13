<template functional>
  <v-card
      class="mx-auto"
      max-width="100%"
  >
    <v-list dense height="50vh" class="overflow-auto">
      <v-subheader>{{props.title}}</v-subheader>
      <v-list-item-group>
        <v-list-item
            :key="i"
            v-for="(val, i) in props.value"
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
</template>
