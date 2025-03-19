<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { CheckCircle, Clock } from 'lucide-vue-next';
import { computed } from 'vue';
import type { AppPageProps } from '@/types';

const page = usePage<AppPageProps>();
const user = computed(() => page.props.auth?.user);
const username = computed(() => user.value?.name || 'Pioskl');


</script>

<template>
    <AuthLayout>
        <Head title="Dashboard" />

        <div class="min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-gray-200 p-6">
            <div class="max-w-4xl mx-auto p-6 bg-white dark:bg-[#121212] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <div class="flex flex-col items-center text-center mb-8">
                    <CheckCircle class="h-16 w-16 text-indigo-600 mb-4" />

                    <h1 class="text-4xl font-bold text-indigo-600 mb-2">
                        Witaj w panelu
                    </h1>

                    <p class="text-xl text-gray-700 dark:text-gray-300">
                        You have successfully logged in, {{ username }}!
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div class="bg-gray-50 dark:bg-[#18181b] p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h2 class="font-semibold text-lg text-indigo-700 dark:text-indigo-400 mb-2">Status konta</h2>
                        <p class="text-gray-600 dark:text-gray-300">Aktywne</p>
                    </div>

                    <div class="bg-gray-50 dark:bg-[#18181b] p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h2 class="font-semibold text-lg text-indigo-700 dark:text-indigo-400 mb-2">
                            <div class="flex items-center gap-2">
                                <Clock class="h-4 w-4" />
                                <span>Czas logowania (UTC)</span>
                            </div>
                        </h2>
                        <p class="text-gray-600 dark:text-gray-300">{{  }}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Twoja strefa czasowa: UTC</p>
                    </div>

                    <div class="bg-gray-50 dark:bg-[#18181b] p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h2 class="font-semibold text-lg text-indigo-700 dark:text-indigo-400 mb-2">Ostatnia sesja</h2>
                        <p class="text-gray-600 dark:text-gray-300">Pierwsze logowanie dzisiaj</p>
                    </div>
                </div>

                <div class="mt-8 p-6 bg-gray-50 dark:bg-[#18181b] rounded-lg border border-gray-200 dark:border-gray-700">
                    <h2 class="font-semibold text-xl text-indigo-700 dark:text-indigo-400 mb-4">Co chciał(a)byś dzisiaj zrobić?</h2>
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <button class="py-3 px-4 bg-white dark:bg-[#1c1c1c] rounded-md border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors">
                            Obejrzyj profil
                        </button>
                        <button class="py-3 px-4 bg-white dark:bg-[#1c1c1c] rounded-md border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors">
                            Zaaktualizuj ustawienia
                        </button>
                        <button class="py-3 px-4 bg-white dark:bg-[#1c1c1c] rounded-md border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors">
                            Odkrywaj
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
