<template>
  <DefaultLayout title="Registro Exitoso" show-back>
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
        <span class="material-symbols-outlined text-brand-green text-5xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
      </div>
      
      <div class="space-y-2">
        <h1 class="font-headline font-extrabold text-3xl text-on-surface">¡Registro Completado!</h1>
        <p class="text-on-surface-variant max-w-xs mx-auto">
          Tu perfil ha sido enviado para validación. Pronto aparecerás en el directorio de confianza.
        </p>
      </div>

      <div class="pt-8 w-full space-y-4">
        <button @click="$router.push('/panel')" class="w-full bg-brand-green text-white font-headline font-bold py-5 rounded-full shadow-lg active:scale-[0.98] transition-all hover:brightness-105">
          Ir a mi Panel
        </button>
        <button @click="$router.push('/')" class="w-full bg-gray-100 text-on-surface font-headline font-bold py-5 rounded-full active:scale-[0.98] transition-all">
          Volver al Inicio
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../components/layout/DefaultLayout.vue'
</script>
