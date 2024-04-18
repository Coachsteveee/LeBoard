<template>
  <q-page class="relative-position">
    <q-header bordered class="bg-white text-black">
      <!-- <div class="q-mb-sm lt-md header-icon bungee-shade" to="/">LeBoard</div> -->

      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="text-black shadow-2"
        :breakpoint="0"
      >
        <q-route-tab to="/homeprojects" label="Projects" />
        <q-route-tab to="/homepage" label="Home" />
        <q-route-tab to="/homeinvitations" label="Invitations" />
      </q-tabs>
    </q-header>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "PageHome",
});
</script>
<!-- <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify q-pa-sm"
            narrow-indicator
          >
            <q-btn dense flat round icon="menu" @click="left = !left" />
            <q-tab name="projects" label="Projects" />
            <q-tab name="home" label="For You" />
            <q-tab name="invitations" label="Invitations" />
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="projects">
                <div class="text-h6">Projects</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="home">
                <div class="text-h6">Home</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="invitations">
                <div class="text-h6">Invitations</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-tabs>
        </div> -->
