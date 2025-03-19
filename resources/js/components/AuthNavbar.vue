<script setup lang="ts">
import { LogOut, User, Settings } from 'lucide-vue-next';
import { router, usePage } from '@inertiajs/vue3';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const logout = () => {
    router.post(route('logout'));
};

const page = usePage();
const username = computed(() => page.props.auth?.user?.name);
// Create reactive current date time
const currentDateTime = ref('');

// Function to update time
const updateDateTime = () => {
    const now = new Date();

    // Format as YYYY-MM-DD HH:MM:SS in UTC
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    currentDateTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Timer reference
let timeInterval: number | null = null;

// Set up timer when component mounts
onMounted(() => {
    // Update immediately
    updateDateTime();

    // Then update every second
    timeInterval = window.setInterval(updateDateTime, 1000);
});

// Clean up timer when component unmounts
onBeforeUnmount(() => {
    if (timeInterval !== null) {
        clearInterval(timeInterval);
    }
});
</script>

<template>
    <nav class="bg-[#FDFDFC] dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 px-4 py-2.5 fixed w-full z-50">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex items-center">
                <a href="/dashboard" class="flex items-center">
                    <span class="self-center text-xl font-semibold text-[#1b1b18] dark:text-gray-200 whitespace-nowrap">Twój panel</span>
                </a>
            </div>

            <div class="flex items-center gap-4">
                <!-- Current UTC time display -->
                <div class="hidden md:block text-sm text-gray-600 dark:text-gray-400">
                    <span>{{ currentDateTime }} (CET)</span>
                </div>

                <!-- User info -->
                <div class="flex items-center gap-2 px-3 py-1.5 text-sm text-[#1b1b18] dark:text-gray-300">
                    <User class="h-4 w-4 text-indigo-600" />
                    <span>{{ username }}</span>
                </div>

                <!-- Settings button -->
                <button
                    class="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#1b1b18] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#18181b] hover:text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    title="Settings"
                >
                    <Settings class="h-4 w-4" />
                    <span class="hidden md:inline">Settings</span>
                </button>

                <!-- Logout button -->
                <button
                    @click="logout"
                    class="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#1b1b18] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#18181b] hover:text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    title="Logout"
                >
                    <LogOut class="h-4 w-4" />
                    <span class="hidden md:inline">Logout</span>
                </button>
            </div>
        </div>
    </nav>
    <!-- Add padding to push content below the fixed navbar -->
    <div class="pt-16"></div>
</template>

<style scoped>
/* Additional custom styles could be added here if needed */
</style>
