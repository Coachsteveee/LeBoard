<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6" style="text-align: center">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" ref="loginForm">
          <q-input
            filled
            v-model="login.email"
            label="Email"
            :rules="[(val) => !!val || 'Email is required']"
          />
          <q-input
            filled
            v-model="login.password"
            label="Password"
            type="password"
            :rules="[(val) => !!val || 'Password is required']"
          />
          <div>
            <q-btn
              label="Login"
              type="submit"
              color="primary"
              class="q-mt-md"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const login = ref({
      email: "",
      password: "",
    });

    const onSubmit = () => {
      // Perform login logic here
      $q.notify("Login successful");
    };

    const onReset = () => {
      login.value.email = "";
      login.value.password = "";
    };

    return {
      login,
      onSubmit,
      onReset,
    };
  },
};
</script>
