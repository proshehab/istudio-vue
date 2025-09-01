<template>
  <h2>User List</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  const response = await axios.get('/api/users')
  users.value = response.data
})
</script>
