<script setup lang="ts">
import AuthNavbar from '@/components/AuthNavbar.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <AuthNavbar />
        <main class="flex-grow">
            <slot />
        </main>
    </div>
</template>
