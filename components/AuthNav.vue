<script setup lang="ts">
const { signIn, signOut, session, status } = useAuth();

</script>

<template>
    <div v-if="status === 'loading'">
        <UButton label="Loading..." />
    </div>
    <div v-else-if="status === 'unauthenticated'">
        <UButton label="Login" @click="signIn(`discord`)" />
    </div>
    <div v-else-if="status === 'authenticated'" class="flex items-center space-x-2 text">
        <p class="capitalize">Welcome, {{ session?.user?.name || 'somehow you have no name' }}</p>
        <UButton label="Logout" @click="signOut()"/>
    </div>
</template>

