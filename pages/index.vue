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
    <pre>{{ JSON.stringify(session) }}</pre>
    <pre>{{ cookies }}</pre>
  </div>
</template>
