<template>
  <q-page class="relative-position">
    <q-header bordered class="bg-white text-black q-pt-sm">
      <!-- <div class="q-mb-sm lt-md header-icon bungee-shade" to="/">LeBoard</div> -->

      <q-tabs
        dense
        align="justify"
        v-model="tab"
        class="text-black"
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
  name: "HomeProjects",
});
</script>
