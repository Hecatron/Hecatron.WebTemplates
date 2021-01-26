<template>
  <q-layout view="hHh LpR fFf">
    <header-component />
    <leftsidemenu-component />
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-component />
  </q-layout>
</template>

<script src="./root.ts"></script>
