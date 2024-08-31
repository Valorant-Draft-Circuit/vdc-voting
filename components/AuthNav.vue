<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();

</script>

<template>
    <div v-if="status === 'loading'">
        <UButton label="Loading..." />
    </div>
    <div v-else-if="status === 'unauthenticated'">
        <UButton label="Login" />
    </div>
    <div v-else-if="status === 'authenticated'" class="flex items-center space-x-2 text">
        <p class="capitalize">Welcome, {{ session?.user?.name }}</p>
        <UButton label="Logout" />
    </div>
</template>

