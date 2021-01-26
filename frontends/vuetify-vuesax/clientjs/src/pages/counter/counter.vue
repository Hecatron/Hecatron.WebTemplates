<template>
  <v-container fluid>
    <v-row>
      <v-col>

        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component. <v-icon>fa-cog</v-icon></p>

        <p>Current count: <strong>{{ currentcount }}</strong></p>

        <v-btn @click="incrementCounter">Increment</v-btn>

      <vs-button
        :active="active == 0"
        @click="active = 0"
      >
        <i class="bx bx-home-alt"></i> Home
      </vs-button>

      <vs-button
        success
        flat
        :active="active == 1"
        @click="active = 1"
      >
        <i class="bx bxs-phone-call"></i> Call
      </vs-button>

      <vs-button
        danger
        border
        :active="active == 2"
        @click="active = 2"
      >
        <i class="bx bxs-heart"></i> Like
      </vs-button>

      <vs-button
        warn
        gradient
        :active="active == 3"
        @click="active = 3"
      >
        <i class="bx bxs-bell-ring"></i> Notifications
      </vs-button>

      <vs-button
        color="#7d33ff"
        relief
        :active="active == 5"
        @click="active = 5"
      >
        <i class="bx bxs-paper-plane"></i> Send
      </vs-button>

      <vs-button
        color="rgb(59,222,200)"
        gradient
        :active="active == 6"
        @click="active = 6"
      >
        <i class="bx bxs-purchase-tag"></i> Save
      </vs-button>

      <vs-button-group>
        <vs-button>
          One
        </vs-button>
        <vs-button>
          Two
        </vs-button>
        <vs-button>
          Three
        </vs-button>
        <vs-button>
          four
        </vs-button>
      </vs-button-group>

      <vs-switch>
        Suscribe
      </vs-switch>

      <vs-select placeholder="Select" v-model="value2" dark>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option disabled label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./counter.ts"></script>
<style lang="scss" src="./counter.scss"></style>
