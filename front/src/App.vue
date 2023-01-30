<script setup>
  
</script>

<template>
  <header class="p-4">
    <div class="max-w-7xl mx-auto">
      <nav>
        <router-link class="px-4 py-2 mr-2 bg-indigo-700 hover:bg-indigo-400 rounded text-white" to="/">Home</router-link> 
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-700 hover:bg-indigo-400 text-white" to="/skills">Skills</RouterLink>
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen bg-gray-400">
    
    <router-view />
  </main>
</template>

