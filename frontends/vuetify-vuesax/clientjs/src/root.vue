<template>
  <div class="app-dashboard">
    <v-app id="inspire">

      <sidebar-component ref="sidebar1" app />

      <topnavbar-component v-on:sidebar-toggle="toggle_sidebar()" app />

      <v-main>
        <router-view></router-view>
      </v-main>

      <v-footer app fixed>
        <span>&copy; 2019</span>
      </v-footer>

    </v-app>
  </div>
</template>

<script src="./root.ts"></script>
