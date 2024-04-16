<template>
  <q-header bordered class="bg-white text-black">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bold">
        <span>Projects</span>
      </q-toolbar-title>
    </q-toolbar>

    <q-separator horizontal />

    <q-toolbar>
      <q-toolbar-title class="text-center">
        <span>All</span>
      </q-toolbar-title>

      <q-separator vertical />

      <q-toolbar-title class="text-center">
        <span>Unread</span>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="flex flex-center">
    <h5>Notifications</h5>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "PageNotifications",
});
</script>
