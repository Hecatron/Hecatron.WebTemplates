<template>

  <q-drawer show-if-above v-model="show_leftsidemenu" side="left" bordered content-class="q-pa-md bg-grey-10 text-white">

      <q-list bordered class="rounded-borders">


        <q-item dark clickable v-ripple to="/">
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-expansion-item expand-separator
                          icon="mdi-cog"
                          label="Basic Examples"
                          default-opened>

          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right-bold" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/counter">
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right-bold" />
            </q-item-section>
            <q-item-section>Counter Example</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/staticpage">
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right-bold" />
            </q-item-section>
            <q-item-section>Static Page</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/fetchdata">
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right-bold" />
            </q-item-section>
            <q-item-section>Fetch Data Example</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/weather">
            <q-item-section avatar>
              <q-icon color="primary" name="mdi-arrow-right-bold" />
            </q-item-section>
            <q-item-section>Weather Fetch Data</q-item-section>
          </q-item>

        </q-expansion-item>

        <q-expansion-item expand-separator
                          icon="mdi-cog"
                          label="Sub Menu Example">

          <q-expansion-item expand-separator
                            :header-inset-level="1"
                            :content-inset-level="1"
                            icon="mdi-cog"
                            label="Sub Menu1">

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="mdi-arrow-right-bold" />
              </q-item-section>
              <q-item-section>Thing1</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="mdi-arrow-right-bold" />
              </q-item-section>
              <q-item-section>Thing2</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="mdi-arrow-right-bold" />
              </q-item-section>
              <q-item-section>Thing3</q-item-section>
            </q-item>

          </q-expansion-item>
        </q-expansion-item>



      </q-list>

  </q-drawer>

</template>

<script src="./leftsidemenu.ts"></script>
