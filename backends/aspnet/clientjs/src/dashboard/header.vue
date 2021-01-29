<template>

  <q-header elevated class="bg-primary text-white">
    <topbar-component />
    <q-toolbar>
      <q-btn dense flat round icon="mdi-menu" @click="toggle_leftsidemenu_click" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

</template>

<script src="./header.ts"></script>
