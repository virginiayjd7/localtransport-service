<template>
  <DefaultLayout title="Taxis en Ite" show-back>
    <!-- Search & Filter Section -->
    <section class="space-y-4 mb-8">
      <div class="relative group">
        <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <span class="material-symbols-outlined text-outline text-xl">search</span>
        </div>
        <input class="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-none shadow-soft ring-1 ring-black/[0.03] focus:ring-2 focus:ring-brand-green/30 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/50" placeholder="Buscar por zona (Centro, Playa...)" type="text" v-model="searchQuery"/>
      </div>
      
      <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-soft ring-1 ring-black/[0.03]">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-brand-green text-lg" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          </div>
          <span class="font-semibold text-sm text-on-surface">Ver solo disponibles</span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked class="sr-only peer" v-model="onlyAvailable">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
        </label>
      </div>
    </section>

    <!-- Driver List -->
    <section class="space-y-5">
      <div class="flex items-center justify-between px-1">
        <h2 class="font-headline font-bold text-xl text-brand-green">Conductores</h2>
        <span class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">{{ filteredDrivers.length }} resultados</span>
      </div>

      <div v-for="driver in filteredDrivers" :key="driver.name" 
           class="bg-white rounded-[2rem] p-6 space-y-6 shadow-soft hover:shadow-card-hover transition-all duration-300 group border border-gray-50"
           :class="{ 'opacity-60 grayscale-[0.5]': !driver.available }">
        <div class="flex items-start justify-between">
          <div class="flex gap-4">
            <div class="relative">
              <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-green/10">
                <img :alt="driver.name" class="w-full h-full object-cover" :src="driver.avatar" />
              </div>
            </div>
            <div>
              <h3 class="font-headline font-bold text-lg text-on-surface">{{ driver.name }}</h3>
              <div class="flex items-center gap-1 mt-0.5">
                <span class="material-symbols-outlined text-[16px] text-blue-500">location_on</span>
                <span class="text-sm font-medium text-on-surface-variant">{{ driver.zone }}</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <span class="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-tighter">Pagos:</span>
                <div class="flex gap-1.5">
                  <span v-for="pay in driver.payments" :key="pay" 
                        class="px-1.5 py-0.5 rounded text-[10px] font-bold"
                        :class="getPaymentClass(pay)">{{ pay }}</span>
                </div>
              </div>
            </div>
          </div>
          <span class="px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest"
                :class="driver.available ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'">
            {{ driver.available ? 'Disponible' : 'No Disponible' }}
          </span>
        </div>
        
        <div class="flex flex-col gap-3" v-if="driver.available">
          <a :href="'tel:' + driver.phone" class="bg-brand-gold text-on-surface rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">call</span>
            Llamar a {{ driver.name.split(' ')[0] }}
          </a>
          <a :href="'https://wa.me/' + driver.phone + '?text=Hola,%20necesito%20un%20taxi%20en%20Ite'" class="bg-brand-green text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
            <span class="material-symbols-outlined text-xl">chat</span>
            Enviar WhatsApp
          </a>
        </div>
        <div class="flex flex-col gap-3 pointer-events-none" v-else>
           <button class="bg-gray-100 text-gray-400 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold">
            <span class="material-symbols-outlined text-xl">call</span>
            Llamar
          </button>
          <button class="bg-gray-100 text-gray-400 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold">
            <span class="material-symbols-outlined text-xl">chat</span>
            Enviar WhatsApp
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 flex flex-col items-center gap-4">
      <div class="w-12 h-1 bg-brand-gold rounded-full"></div>
      <p class="text-brand-green font-label text-[10px] uppercase tracking-widest font-black opacity-50">Hecho para Ite</p>
    </footer>

    <!-- FAB -->
    <div class="fixed bottom-32 right-6 z-40">
      <button class="bg-brand-gold w-14 h-14 rounded-full shadow-xl shadow-brand-gold/30 flex items-center justify-center text-on-surface active:scale-90 transition-transform ring-4 ring-white">
        <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">emergency_share</span>
      </button>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const searchQuery = ref('')
const onlyAvailable = ref(true)

const drivers = [
  {
    name: 'Juan Perez',
    zone: 'Centro',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR4FPwFtA6oOL_hwh382yKchRpn0KpWGTcU7kxuVIj3YF5zyqpRsb1tAv9jv-O_ef4BVxc1Viznhsx1w0rm1xZ3f6CJS93SkgRCNa7UGbYriarCRuP6CeTSTJDg6kzxZDyWKgJuw66HDEk0C0N180NE4nGkZHI8LsbIjK6r768CEnxGqDlt_a74pGL-GcdKi2-yI8mLqGylorx9eDzFRM039RCY_6MCOUPtg217LlHTI6XSotBJ89f8rIcY9B0UfefH6s7NpPNAgb8',
    available: true,
    phone: '999999999',
    payments: ['YAPE', 'PLIN']
  },
  {
    name: 'Carlos Ramos',
    zone: 'Playa',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3arqYLl-9PpmqTsTMJs5DLN_klmWGFgIx4NzWtzKvH5cmQ3AoZaYqQHIR_56OTZmx3EeJE0pJlFvbVgbyNoUqN-6U6nfhswCKJd0D0IBID8zRFevXsF6IjfMHBj3VRRnuW1uLLw-usT5lQrB1DmV4IG51kmUOsEUbPlM919DQz8H5IwhFwHP_uZ6DTPsvPfLfZRTfuKrv0TbxyD-5E8niJPUV1eMkiMP6ZuW8VlEgww3Px5UBMKlP1HUI2PXyqvSS1qXOP5DVJ8E',
    available: false,
    phone: '988888888',
    payments: ['EFECTIVO']
  },
  {
    name: 'Luis Quispe',
    zone: 'Ite Norte',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd1D7Zs1EkF497AqCW0aSCRG2_Q5pEda7G-JG00G_TpYp4ZROGIWY7KsvD3UnyXL1xAXyhpOzbPI7_d_HPs321kVWDgMNwcKRUoGKp3hwar4K4tn-dFFCPk5_UZwnp1-40577w4HPWOnDDkeW_vwJusHrjt4a_o56Qe1UQp-O2e0uYm8LjR33C_xNEeVEflwcp6R55xupn6TDHkPVgptOO8yOX5Gzp58yqP3ez-oYD-RyG7ymnoidZngvaqywKaqZLeQL4vwZyFhg',
    available: true,
    phone: '977777777',
    payments: ['YAPE']
  }
]

const filteredDrivers = computed(() => {
  return drivers.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          d.zone.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesAvailable = onlyAvailable.value ? d.available : true
    return matchesSearch && matchesAvailable
  })
})

const getPaymentClass = (pay) => {
  if (pay === 'YAPE') return 'bg-blue-50 text-blue-600'
  if (pay === 'PLIN') return 'bg-purple-50 text-purple-600'
  return 'bg-gray-50 text-gray-500'
}
</script>
