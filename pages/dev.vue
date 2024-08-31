<script setup>
const route = useRoute();
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
    <button @click="signIn(`discord`)">JS Sign In</button>
    <button @click="signOut()">Sign Out</button>

    <pre>{{ status }}</pre>
    <pre>{{ session?.user }}</pre>
    <!-- <pre>{{ JSON.stringify(session) }}</pre> -->
    <!-- <pre>{{ $config.public.authJs.baseUrl }}</pre> -->
    <!-- <pre>{{ cookies }}</pre> -->

    <p class="font-montserrat font-bold"> Mon font test</p>
    <p class="font-roboto font-bold"> Roboto font test</p>
  </div>
</template>


