<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section class="relative h-48 rounded-xl overflow-hidden shadow-lg group mb-8">
      <img alt="Ite valley landscape" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWv2EyPL_MBAsFsyyIxTBoJaKYjNIUStntS1T1O_j35j2WhiEY1BQON5nWcEaj7b_JYwZDXyTszHJbxErGB9XeyXpxp-Nd6IeiaLZ6g2PNx-wMsovRD2fD-WlWi_tZt5SW0Y1uiITnyzbIB9-9kZvfOnj-hCpniAzRUW9eJV7Tjr6-owlzW1qaWFwPLlGDw9hBnqQYr4LbQu5E-PQ2mk9fcfslhuDY1_pvMMjsfGywhUz96MykU9vd6s4xB8wFkdeXeib9vcMsRpo" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h1 class="font-headline font-extrabold text-2xl text-white uppercase tracking-tight">Tu viaje en Ite empieza aquí</h1>
        <p class="text-white/80 text-sm">Viaja seguro por todo el distrito</p>
      </div>
    </section>

    <!-- Selection Area: Origin -->
    <section class="space-y-4 mb-8">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-tertiary">location_on</span>
        <h2 class="font-headline font-bold text-lg text-on-surface">¿Desde dónde estás?</h2>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button v-for="location in locations" :key="location.name" 
                class="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-outline-variant shadow-sm active:scale-95 transition-all hover:border-brand-gold">
          <span class="font-bold text-on-surface">{{ location.name }}</span>
          <span class="text-xs text-secondary mt-1">{{ location.desc }}</span>
        </button>
      </div>
    </section>

    <!-- Selection Area: Destination -->
    <section class="space-y-4 mb-8">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-brand-gold">near_me</span>
        <h2 class="font-headline font-bold text-lg text-on-surface">¿A dónde vas?</h2>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button v-for="dest in destinations" :key="dest.name"
                :class="dest.fullWidth ? 'col-span-2' : ''"
                class="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-outline-variant shadow-sm active:scale-95 transition-all hover:border-brand-gold">
          <span class="font-bold text-on-surface">{{ dest.name }}</span>
          <span class="text-xs text-secondary mt-1">{{ dest.desc }}</span>
        </button>
      </div>
    </section>

    <!-- Primary CTA -->
    <section class="pb-8">
      <button @click="$router.push('/taxis')" class="w-full bg-brand-gold hover:bg-yellow-500 text-on-surface font-headline font-extrabold py-4 rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2">
        <span class="material-symbols-outlined">search</span>
        Buscar Transporte
      </button>
    </section>

    <!-- Info Cards Bento -->
    <section class="grid grid-cols-2 gap-4 pb-12">
      <div class="bg-brand-gold/10 p-4 rounded-xl space-y-2 border border-brand-gold/30 cursor-pointer hover:bg-brand-gold/20 transition-colors" @click="$router.push('/rutas')">
        <span class="material-symbols-outlined text-brand-gold-dark">directions_bus</span>
        <h3 class="font-bold text-sm">Buses Locales</h3>
        <p class="text-xs text-secondary">Horarios actualizados cada 15 min.</p>
      </div>
      <div class="bg-tertiary/10 p-4 rounded-xl space-y-2 border border-tertiary/20 cursor-pointer hover:bg-tertiary/20 transition-colors" @click="$router.push('/taxis')">
        <span class="material-symbols-outlined text-tertiary">local_taxi</span>
        <h3 class="font-bold text-sm">Taxis Seguros</h3>
        <p class="text-xs text-secondary">Conductores verificados del distrito.</p>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const locations = [
  { name: 'Pampa Alta', desc: 'Bajar a Pampa Baja' },
  { name: 'Pampa Baja', desc: 'Desde el corazón de Ite' },
  { name: 'Las Vilcas', desc: 'Zona agrícola' },
  { name: 'Playa / Meca', desc: 'Litoral de Ite' }
]

const destinations = [
  { name: 'Pampa Alta', desc: 'Subir a Pampa Alta' },
  { name: 'Pampa Baja', desc: 'Zona comercial' },
  { name: 'Tacna', desc: 'Viaje interprovincial' },
  { name: 'Playa Meca', desc: 'Destino turístico' },
  { name: 'Las Vilcas', desc: 'Hacia los humedales', fullWidth: true }
]
</script>
