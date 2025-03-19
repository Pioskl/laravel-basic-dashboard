<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

interface Props {
    token: string;
    email: string;
}

const props = defineProps<Props>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFC] dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
        <Head title="Resetowanie hasła" />

        <div class="max-w-md w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[#1b1b18] dark:text-gray-200">Resetowanie hasła</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Proszę wprowadzić nowe hasło poniżej</p>
            </div>

            <div class="bg-white dark:bg-[#121212] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <form @submit.prevent="submit">
                    <div class="grid gap-6">
                        <div class="grid gap-2">
                            <label for="email" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                v-model="form.email"
                                class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                                readonly
                            />
                            <p v-if="form.errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.email }}</p>
                        </div>

                        <div class="grid gap-2">
                            <label for="password" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Hasło</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                autocomplete="new-password"
                                v-model="form.password"
                                class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                                autofocus
                                placeholder="••••••••"
                            />
                            <p v-if="form.errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.password }}</p>
                        </div>

                        <div class="grid gap-2">
                            <label for="password_confirmation" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Potwierdź hasło</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                autocomplete="new-password"
                                v-model="form.password_confirmation"
                                class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                                placeholder="••••••••"
                            />
                            <p v-if="form.errors.password_confirmation" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.password_confirmation }}</p>
                        </div>

                        <button
                            type="submit"
                            class="mt-2 w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors flex justify-center items-center"
                            :disabled="form.processing"
                        >
                            <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin mr-2" />
                            Resetuj hasło
                        </button>
                    </div>
                </form>
            </div>

            <div class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <p class="mt-6 text-xs text-gray-500 dark:text-gray-500">
                    Obecnie zalogowany: {{ username }}
                </p>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Data i czas: {{ currentDateTime }} (UTC)
                </p>
                <p class="mt-6 text-xs">
                    <a :href="route('login')" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                        Wróć do strony logowania
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
