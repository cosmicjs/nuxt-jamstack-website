<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title to="/"><v-btn to="/">JAMstack Website using Vue.js, Nuxt.js and Cosmic JS</v-btn></v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="false"
      app
    >
    <v-layout
      justify-center
      row
      wrap
    >
      <span class='center-align'>Proudly Powered by <a href='https://cosmicjs.com/'>Cosmic JS</a></span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Blog',
          to: '/blog'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'JAMstack Website using Vue.js, Nuxt.js and Cosmic JS'
    }
  }
}
</script>

<style>
.center-align {
  text-align: center!important
}
</style>