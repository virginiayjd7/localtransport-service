<template>
  <DefaultLayout title="Rutas de Transporte" show-back>
    <!-- Hero Search -->
    <section class="mb-8">
      <h2 class="font-headline text-3xl font-extrabold text-on-surface mb-2">¿A dónde viajas hoy?</h2>
      <p class="text-on-surface-variant mb-6">Consulta rutas y horarios de combis en tiempo real.</p>
      <div class="relative group">
        <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <span class="material-symbols-outlined text-outline" data-icon="search">search</span>
        </div>
        <input class="w-full pl-12 pr-4 py-4 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-brand-gold font-medium text-on-surface placeholder-stone-400" placeholder="Buscar destino o parada..." type="text" v-model="searchQuery"/>
      </div>
    </section>

    <!-- Main Routes Section -->
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <h3 class="font-headline text-xl font-bold">Rutas Principales</h3>
        <span class="text-sm font-semibold text-brand-gold-dark underline cursor-pointer">Ver mapa</span>
      </div>

      <div v-for="route in filteredRoutes" :key="route.id" 
           class="bg-white rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-gold/10 transition-colors"></div>
        <div class="flex items-start justify-between relative z-10">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-yellow-50 text-brand-gold-dark text-[10px] font-bold rounded uppercase tracking-wider">{{ route.type }}</span>
              <span class="text-xs text-on-surface-variant font-medium">{{ route.frequency }}</span>
            </div>
            <h4 class="font-headline text-lg font-bold text-on-surface mt-1">{{ route.name }}</h4>
          </div>
          <div class="p-3 bg-brand-gold/20 rounded-lg shadow-sm">
            <span class="material-symbols-outlined text-brand-gold-dark">{{ route.icon }}</span>
          </div>
        </div>
        
        <div class="flex items-center gap-6 py-2 border-y border-outline-variant/10 relative z-10">
          <div class="flex flex-col">
            <span class="text-[10px] text-stone-400 uppercase font-bold tracking-tighter">Horario Aprox</span>
            <span class="text-sm font-semibold flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">schedule</span>
              {{ route.schedule }}
            </span>
          </div>
          <div class="flex flex-col border-l border-outline-variant/20 pl-6">
            <span class="text-[10px] text-stone-400 uppercase font-bold tracking-tighter">Precio Ref.</span>
            <span class="text-sm font-bold text-on-surface">{{ route.price }}</span>
          </div>
        </div>
        
        <button class="w-full py-3 hover:bg-brand-gold/20 transition-colors text-on-surface font-bold rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] bg-brand-gold/10">
          Ver paraderos
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </section>

    <!-- Payment Methods Section -->
    <section class="mt-12 bg-gray-50 p-6 rounded-2xl border-dashed border-2 border-outline-variant">
      <h5 class="text-center font-headline font-bold text-on-surface mb-6 flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-brand-gold-dark">contactless</span>
        Paga de forma segura
      </h5>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-xl flex items-center justify-center gap-3 shadow-sm border border-gray-100">
          <img alt="Yape" class="h-6 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5iUDuvqEU9K0LxqtSbjORZchFKIgXM9UcLhQ0Xt8erWp4F6_BIeIuxBc3ydypX2wqlbCgxYYiwGBvUsgcha9AfHXLrRY-sFoRyybAYBiZ0Wvq2bkFcY_qNLRhbS-mAWZ_8thAV_fSy9ie9A1_LBDCmgX4ciYm5HPOZ5UX1YksUIUeW3wZl1iDDKBPjRnJppUHQz4TMDoeuTtr_iHPgNkyXm1pQjvRRryX4N490_GgblBTly4glyxnaSuQ4WqqmIdjBRN7Kj2NyE" />
          <span class="text-sm font-bold text-purple-700">Yape</span>
        </div>
        <div class="bg-white p-4 rounded-xl flex items-center justify-center gap-3 shadow-sm border border-gray-100">
          <img alt="Plin" class="h-6 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBAV0rCSbXGkqurV2zGgwt1WnktXUpbMg8xN_nI20RPNl95qBHiGaM9rxRJSYqd7EmDUdk2PqnIfUeO9oc8I4UY9M1a4LvCobOHxTBPfZEcjPJT2JMXaH-9HsXYo81Xk3i8tMPpx5clQHDHZJSfqFwJQtYyhUClKFc_NXdYP-BC95g4qJlRtC0yn4rCDxVKUohgnusOOXHr4A6OlBnKEk-HsMjrlN3Protk123A8BhixNGsly0jmNAdHeHa1k2BmVQ2kzxqj4HK9U" />
          <span class="text-sm font-bold text-cyan-600">Plin</span>
        </div>
      </div>
      <p class="text-center text-[11px] text-on-surface-variant mt-4 px-4 leading-relaxed">
        Muestra tu código QR al conductor al momento de subir a la unidad. Recuerda siempre pedir tu boleto físico.
      </p>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const searchQuery = ref('')

const routes = [
  {
    id: 1,
    name: 'Pampa Alta → Tacna',
    type: 'Interurbano',
    frequency: 'Salidas cada 30 min',
    schedule: '05:00 - 19:30',
    price: 'S/ 12.00',
    icon: 'directions_bus'
  },
  {
    id: 2,
    name: 'Pampa Baja → Tacna',
    type: 'Directo',
    frequency: 'Salidas cada 45 min',
    schedule: '06:00 - 18:30',
    price: 'S/ 10.00',
    icon: 'airport_shuttle'
  },
  {
    id: 3,
    name: 'Ite → Playas',
    type: 'Local',
    frequency: 'Solo fines de semana',
    schedule: '08:00 - 17:00',
    price: 'S/ 3.50',
    icon: 'beach_access'
  }
]

const filteredRoutes = computed(() => {
  return routes.filter(r => r.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>
