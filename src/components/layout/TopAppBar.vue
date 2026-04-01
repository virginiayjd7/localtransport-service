<template>
  <header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-[#FDFCFA] dark:bg-gray-900 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
    <div class="flex items-center gap-4">
      <button v-if="showBack" @click="$router.back()" class="material-symbols-outlined text-gray-600 dark:text-gray-400 active:scale-95 transition-transform">arrow_back</button>
      <button v-else class="material-symbols-outlined text-gray-600 dark:text-gray-400 active:scale-95 transition-transform">menu</button>
      
      <div v-if="title" class="font-headline font-bold text-xl tracking-tight text-brand-green dark:text-brand-gold">
        {{ title }}
      </div>
      <img v-else alt="Movilidad Ite Logo" class="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDstm-uLyidTTewYKWYu44fCPNJDaG51qxew3-TaPjswJqGiG_Zl8km9f9NY08PIBSOj46pYAXq_pH_32MdoLPvJgEcChGl6U-SzV6yaSq9bZXaxMDTtpq-6BfMR9CnfxKrkiz-nE2-ErMy0muVknjd07UioUFvxzSUtsQqKQjsgl-IPSnSbaJrZ6nLFnMjYC6h6uiizeGscvd8Z4Ddw-8PdU2S_PGD0rlGeKqozhDBeK1_8naTdtYbswzuBOhEvI9_CBmI37i6Fhw" />
    </div>
    
    <div class="flex items-center gap-2">
      <slot name="actions">
        <button class="material-symbols-outlined text-gray-600 dark:text-gray-400 active:scale-95 transition-transform">account_circle</button>
      </slot>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: String,
  showBack: Boolean
})
</script>
