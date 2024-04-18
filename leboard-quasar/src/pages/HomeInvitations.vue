<template>
  <q-page class="relative-position">
    <q-header bordered class="bg-white text-black q-pt-sm">
      <!-- <div class="q-mb-sm lt-md header-icon bungee-shade" to="/">LeBoard</div> -->
      <q-tabs
        dense
        align="justify"
        v-model="tab"
        class="text-black bg-grey-2"
        :breakpoint="0"
      >
        <q-route-tab to="/homeprojects" label="Projects" />
        <q-route-tab to="/homepage" label="Home" />
        <q-route-tab to="/homeinvitations" label="Invitations" />
      </q-tabs>
    </q-header>

    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="fadeOut slow"
      >
        <q-item class="q-py-md">
          <q-item-section>
            <q-btn-dropdown
              flat
              stretch
              dense
              class="q-mt-sm text-grey-10"
              align="left"
              no-caps
            >
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <div class="text-h4 text-weight-bold justify-between">
                    Sent
                  </div>
                </div>
              </template>
            </q-btn-dropdown>
          </q-item-section>
        </q-item>
        <q-item class="q-py-md">
          <q-item-section>
            <q-btn-dropdown
              flat
              dense
              stretch
              class="q-mt-sm text-grey-10"
              align="left"
              no-caps
            >
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <div class="text-h4 text-weight-bold justify-between">
                    Received
                  </div>
                </div>
              </template></q-btn-dropdown
            >
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "HomeInvitiations",
});
</script>
