<template>
  <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-[#FDFCFA] dark:bg-gray-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200 dark:border-gray-800 rounded-t-2xl">
    <router-link to="/rutas" class="nav-item" :class="{ 'active': $route.path === '/rutas' }">
      <span class="material-symbols-outlined" :class="{ 'fill-icon': $route.path === '/rutas' }">directions_bus</span>
      <span>Rutas</span>
    </router-link>
    
    <router-link to="/taxis" class="nav-item" :class="{ 'active': $route.path === '/taxis' }">
      <span class="material-symbols-outlined" :class="{ 'fill-icon': $route.path === '/taxis' }">local_taxi</span>
      <span>Taxis</span>
    </router-link>
    
    <router-link to="/" class="nav-item" :class="{ 'active': $route.path === '/' }">
      <span class="material-symbols-outlined" :class="{ 'fill-icon': $route.path === '/' }">home</span>
      <span>Inicio</span>
    </router-link>
    
    <router-link to="/panel" class="nav-item" :class="{ 'active': $route.path === '/panel' }">
      <span class="material-symbols-outlined" :class="{ 'fill-icon': $route.path === '/panel' }">person</span>
      <span>Perfil</span>
    </router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-item {
  @apply flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-3 py-1 font-body text-[12px] font-medium transition-all duration-150 active:scale-90;
}
.nav-item.active {
  @apply text-brand-gold bg-brand-gold/10 rounded-xl;
}
.fill-icon {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
