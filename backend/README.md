## Create Laravel and Vue Project Setup

Use Laravel 12 (API-only backend)

Use Vue 3 (standalone frontend inside the Laravel app)

Use Vite for modern bundling

Set up Vue Router, Pinia, Axios, and TailwindCSS

-   composer create-project laravel/laravel laravel-vue-spa
-   cd laravel-vue-spa

## Vue 3 Install

-   npm install vue@letest
-   npm install @vitejs/plugin-vue
-   npm install vue-router

## vite.config.js

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
//import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
plugins: [
laravel({
input: ['resources/css/app.css', 'resources/js/app.js'],
refresh: true,
}),
//tailwindcss(),
vue(),
],
});

## app.js

import './bootstrap';
import { createApp } from 'vue';
import app from './components/App.vue';

createApp(app).mount("#app");

## resources->js->components->App.vue

<template lang="">

        <h1>Hello World</h1>

</template>

## Run the server

-   php artisan serve
-   npm run dev
