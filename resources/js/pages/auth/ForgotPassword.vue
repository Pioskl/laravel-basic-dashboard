<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFC] dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
        <Head title="Zapomniałeś hasła" />

        <div class="max-w-md w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[#1b1b18] dark:text-gray-200">Zapomniałeś hasła</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Wprowadź swój adres email, aby otrzymać link do resetowania hasła</p>
            </div>

            <div v-if="status" class="mb-6 p-4 text-center text-sm font-medium bg-gray-50 dark:bg-[#18181b] text-indigo-600 dark:text-indigo-400 rounded-lg border border-gray-200 dark:border-gray-700">
                {{ status }}
            </div>

            <div class="bg-white dark:bg-[#121212] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <form @submit.prevent="submit">
                    <div class="grid gap-2">
                        <label for="email" class="block text-sm font-medium text-[#1b1b18] dark:text-gray-300">Adres email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autocomplete="off"
                            v-model="form.email"
                            autofocus
                            placeholder="email@example.com"
                            class="appearance-none block w-full px-3 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[#1b1b18] dark:text-gray-200 text-sm"
                        />
                        <p v-if="form.errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ form.errors.email }}</p>
                    </div>

                    <div class="my-6 flex items-center justify-start">
                        <button
                            type="submit"
                            class="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors flex justify-center items-center"
                            :disabled="form.processing"
                        >
                            <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin mr-2" />
                            Wyślij link resetowania hasła
                        </button>
                    </div>
                </form>

                <div class="text-center text-sm text-gray-600 dark:text-gray-400">
                    <span>Lub, wróć do </span>
                    <a :href="route('login')" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">logowania</a>
                </div>
            </div>
        </div>
    </div>
</template>
