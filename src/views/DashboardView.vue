<template>
  <DefaultLayout title="Mi Perfil" show-back>
    <!-- Profile Header -->
    <section class="mb-12">
      <div class="flex items-end gap-6 mb-8">
        <div class="relative group">
          <div class="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl rotate-3 transform transition-transform group-hover:rotate-0 border-4 border-white">
            <img alt="Driver Juan Pérez" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdsKUmGPe1iNLS02DRH3jr5mytgscWeQTaegBrLoApApeWgtI1P05Y-Rv4t9z-hAy3d8zP3nxFC-d9hdorP6AwT2h7Zk1yPnUrK_2dZEeohV-qVwePdcI7WnlLz-yg54T21iFmbqq_ouKRqLIZe_3yuk6IsBdsVeh2xjqfmGL7tMHOGn7xzfJgtSTFHawnB8rO8Ny-pr57JJNW3seG1eLxDv6DVAiw-o6mBqhV6jA2zKgYchnfGeqbbyX8NqFd4UY1NCl4xt5mhG0" />
          </div>
          <div class="absolute -bottom-2 -right-2 bg-brand-green-vibrant text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">ACTIVO</div>
        </div>
        <div class="flex-1">
          <h2 class="font-headline font-extrabold text-3xl leading-tight mb-1 text-on-surface">Juan Pérez</h2>
          <p class="text-secondary font-medium tracking-wide text-sm flex items-center gap-1">
            <span class="material-symbols-outlined text-base text-brand-blue">location_on</span>
            Zona: Ite Cercado
          </p>
        </div>
      </div>
      
      <!-- Activity Summary -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-100 p-5 rounded-2xl border border-outline-variant/10">
          <span class="text-secondary text-xs uppercase font-bold tracking-widest mb-2 block">Experiencia</span>
          <p class="text-xl font-headline font-bold text-on-surface">3 años</p>
          <p class="text-xs text-stone-500 mt-1">En el servicio</p>
        </div>
        <div class="bg-gray-100 p-5 rounded-2xl border border-outline-variant/10">
          <span class="text-secondary text-xs uppercase font-bold tracking-widest mb-2 block">Calificación</span>
          <div class="flex items-center gap-1">
            <p class="text-xl font-headline font-bold text-on-surface">4.9</p>
            <span class="material-symbols-outlined text-brand-gold" style="font-variation-settings: 'FILL' 1;">star</span>
          </div>
          <p class="text-xs text-stone-500 mt-1">128 reseñas</p>
        </div>
      </div>
    </section>

    <!-- Availability Toggle -->
    <section class="mb-12">
      <div class="bg-white p-6 rounded-3xl shadow-soft border border-brand-gold/10">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="font-headline font-bold text-xl">Tu Estado</h3>
            <p class="text-secondary text-sm">Determina si puedes recibir pasajeros</p>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-[11px]"
                  :class="isAvailable ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'">
              {{ isAvailable ? 'DISPONIBLE' : 'NO DISPONIBLE' }}
            </span>
          </div>
        </div>
        <button @click="isAvailable = !isAvailable" 
                class="w-full h-20 bg-gray-100 rounded-full relative p-2 transition-all group overflow-hidden border border-outline-variant/20">
          <div class="absolute inset-y-2 w-1/2 rounded-full flex items-center justify-center shadow-lg transition-all transform duration-300"
               :class="isAvailable ? 'left-2 bg-brand-gold translate-x-0' : 'left-2 translate-x-full bg-gray-300'">
            <span class="text-on-surface font-black tracking-tighter text-lg uppercase">
              {{ isAvailable ? 'SI' : 'NO' }}
            </span>
          </div>
          <div class="w-full h-full flex items-center justify-between px-8 pointer-events-none">
            <span class="text-stone-400 font-bold uppercase tracking-widest text-sm" :class="{ 'opacity-0': isAvailable }">No disp.</span>
            <span class="text-stone-400 font-bold uppercase tracking-widest text-sm" :class="{ 'opacity-0': !isAvailable }">Disp.</span>
          </div>
        </button>
        <p class="text-center mt-4 text-xs text-stone-400 font-medium italic">Toca para cambiar de estado</p>
      </div>
    </section>

    <!-- Main Actions -->
    <section class="space-y-4">
      <button class="w-full py-6 px-8 rounded-2xl bg-white border border-outline-variant/15 flex items-center justify-between hover:bg-gray-50 transition-colors active:scale-[0.98]">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center"><span class="material-symbols-outlined text-brand-gold-dark text-3xl">history</span></div>
          <div class="text-left">
            <p class="font-headline font-bold text-lg leading-tight">Historial de Viajes</p>
            <p class="text-stone-500 text-sm">Ver mis rutas recientes</p>
          </div>
        </div>
        <span class="material-symbols-outlined text-stone-300">chevron_right</span>
      </button>
      
      <button class="w-full py-6 px-8 rounded-2xl bg-white border border-outline-variant/15 flex items-center justify-between hover:bg-gray-50 transition-colors active:scale-[0.98]">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center"><span class="material-symbols-outlined text-blue-500 text-3xl">airport_shuttle</span></div>
          <div class="text-left">
            <p class="font-headline font-bold text-lg leading-tight">Mi Unidad</p>
            <p class="text-stone-500 text-sm">Toyota Yaris • Z1-492</p>
          </div>
        </div>
        <span class="material-symbols-outlined text-stone-300">chevron_right</span>
      </button>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const isAvailable = ref(true)
</script>
