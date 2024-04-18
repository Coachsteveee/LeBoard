<template>
  <q-layout view="lHr lpR lFr">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="283"
    >
      <q-toolbar-title class="text-left q-ml-md">
        <router-link to="/homepage" class="text-decoration-none bungee-shade">
          LeBoard
        </router-link>
      </q-toolbar-title>
      <!-- <q-icon name="font_download" /> -->

      <q-list class="alice q-mt-md">
        <q-item to="/homepage" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Home </q-item-section>
        </q-item>

        <q-item to="/notifications" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="notifications" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Notifications </q-item-section>
        </q-item>

        <q-item to="/messages" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="email" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Messages </q-item-section>
        </q-item>

        <q-item to="/bookmarks" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="bookmark" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Bookmarks </q-item-section>
        </q-item>

        <q-item to="/profile" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="account_circle" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Profile </q-item-section>
        </q-item>

        <q-item to="/settings" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="more_horiz" size="md" />
          </q-item-section>
          <q-item-section class="text-h6"> Settings </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
      :width="283"
    >
      <!-- drawer content -->
      <q-input
        class="alice text-weight-bold q-ma-md"
        color="teal"
        rounded
        outlined
        placeholder="Search LeBoard"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="alfa-slab-one-overline q-mb-md"
              >TO DO LIST</q-item-label
            >

            <q-item-label class="text-grey text-h6 text-weight-bold q-mb-sm"
              >LeBoard Project</q-item-label
            >
            <q-item-label caption class="itim"
              >1. Push commits for team review.</q-item-label
            >
            <q-item-label caption class="itim"
              >2. Prepare for the online presentation.</q-item-label
            >
          </q-item-section>
          <q-item-section side top class="q-pt-xl">
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey text-h6 text-weight-bold q-mb-sm"
              >BikeTrax</q-item-label
            >
            <q-item-label caption class="itim"
              >1. Implement location tracking.</q-item-label
            >
            <q-item-label caption class="itim"
              >2. Group zoom meeting @2pm.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
