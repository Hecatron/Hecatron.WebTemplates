<template>
  <div class="q-pa-xl">
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component. <q-icon name="mdi-cog" class="text-red" style="font-size: 2rem;" /> </p>

    <p>Current count: <strong>{{ currentcount }}</strong></p>

    <q-btn glossy color="deep-orange" @click="incrementCounter">Increment</q-btn>
  </div>
</template>

<script src="./counter.ts"></script>
