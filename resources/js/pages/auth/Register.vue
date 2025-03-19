<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFC] dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
        <Head title="Rejestracja" />

        <div class="max-w-md w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[#1b1b18] dark:text-gray-200">Załóż nowe konto</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Wprowadź swoje dane poniżej, aby utworzyć konto</p>
            </div>

            <form @submit.prevent="submit" class="bg-white dark:bg-[#121212] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <div class="grid gap-6">
                    <div class="grid gap-2">
                        <label for="name" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Imię i nazwisko</label>
                        <input
                            id="name"
                            type="text"
                            required
                            autofocus
                            :tabindex="1"
                            autocomplete="name"
                            v-model="form.name"
                            placeholder="Jan Kowalski"
                            class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                        />
                        <p v-if="form.errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.name }}</p>
                    </div>

                    <div class="grid gap-2">
                        <label for="email" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Adres email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            :tabindex="2"
                            autocomplete="email"
                            v-model="form.email"
                            placeholder="email@example.com"
                            class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                        />
                        <p v-if="form.errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.email }}</p>
                    </div>

                    <div class="grid gap-2">
                        <label for="password" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Hasło</label>
                        <input
                            id="password"
                            type="password"
                            required
                            :tabindex="3"
                            autocomplete="new-password"
                            v-model="form.password"
                            placeholder="••••••••"
                            class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                        />
                        <p v-if="form.errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.password }}</p>
                    </div>

                    <div class="grid gap-2">
                        <label for="password_confirmation" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Potwierdź hasło</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            required
                            :tabindex="4"
                            autocomplete="new-password"
                            v-model="form.password_confirmation"
                            placeholder="••••••••"
                            class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                        />
                        <p v-if="form.errors.password_confirmation" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.password_confirmation }}</p>
                    </div>

                    <button
                        type="submit"
                        class="mt-2 w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors flex justify-center items-center"
                        tabindex="5"
                        :disabled="form.processing"
                    >
                        <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin mr-2" />
                        Utwórz konto
                    </button>
                </div>
            </form>

            <div class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>
                    Masz już konto?
                    <a :href="route('login')" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors" :tabindex="6">
                        Zaloguj się
                    </a>
                </p>
                <p class="mt-6 text-xs text-gray-500 dark:text-gray-500">
                    Rejestrując się, akceptujesz nasze Warunki korzystania i Politykę prywatności
                </p>
            </div>
        </div>
    </div>
</template>
