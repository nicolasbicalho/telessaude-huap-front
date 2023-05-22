<script setup>
import { useAccountStore } from '../store/account';
import { ref } from 'vue';

const isPwd = ref(true);

const accountStore = useAccountStore();

const email = ref(null);
const password = ref(null);

function onLogin() {
    console.log('email', email.value)
    console.log('password', password.value)

    accountStore.login({ email, password })
}

</script>

<template>
  <div id="login">
    <div class="login-wrapper">
        <div class="login-card">
            <q-card class="my-card">
                <q-card-section>
                    <div class="title">
                        <h3 class="mb-2">
                            Login
                        </h3>
                        <div class="pb-2">
                            <p>
                                Digite seus dados para entrar
                            </p>
                        </div>
                    </div>
                    <div>
                        <q-input v-model="email" class="email-input" filled type="email" label="Email" />
                        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Password">
                            <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                            </template>
                        </q-input>
                        <div class="login-button">
                            <q-btn @click="onLogin" color="primary" label="Entrar" />
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
  </div>
</template>

<style scoped>
    #login {
        height: 100%;
    }

    .login-wrapper {
        height: 100%;
        padding: 24px;
    }

    .title {
        text-align: center;
    }

    .login-card {
        margin: auto;
        width: 20%;
        top: 30%;
    }

    .email-input {
        margin-bottom: 8px;
    }

    .login-button {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>
