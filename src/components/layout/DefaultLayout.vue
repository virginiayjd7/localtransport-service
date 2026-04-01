<template>
  <div class="min-h-screen bg-background pb-24">
    <TopAppBar :title="title" :show-back="showBack" />
    
    <main class="mt-20 px-4 max-w-2xl mx-auto">
      <slot />
    </main>
    
    <BottomNavBar />
  </div>
</template>

<script setup>
import TopAppBar from './TopAppBar.vue'
import BottomNavBar from './BottomNavBar.vue'

defineProps({
  title: String,
  showBack: Boolean
})
</script>
