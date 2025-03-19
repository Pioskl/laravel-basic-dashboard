<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { LockKeyholeIcon } from 'lucide-vue-next';
</script>

<template>
    <AppLayout>
        <Head title="Welcome">
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <div class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-slate-300 dark:bg-[#0a0a0a] lg:justify-center lg:p-8">
            <div class="mx-auto max-w-md text-center">
                <div class="mb-8 flex justify-center">
                    <LockKeyholeIcon class="h-20 w-20 text-indigo-600" />
                </div>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Witaj na stronie głównej</h1>
                <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
                    Zaloguj się proszę, by otrzymać dostęp do swojego panelu.
                </p>
                <a
                    href="/login"
                    class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                    Zaloguj się, by kontynuować
                </a>
            </div>

            <div class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>Nie masz konta? <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">Zarejestruj się</a></p>
            </div>
        </div>
    </AppLayout>
</template>
