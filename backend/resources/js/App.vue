<template>
  <div id="app">
    <nav>
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/users">Users</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  background: #f5f5f5;
  padding: 10px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
}
</style>
