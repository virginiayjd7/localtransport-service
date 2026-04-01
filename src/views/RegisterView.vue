<template>
  <DefaultLayout title="Registro de Movilidad" show-back>
    <!-- Logo Branding -->
    <div class="flex flex-col items-center mb-10 pt-4">
      <div class="w-full flex items-center justify-center mb-6">
        <img alt="Movilidad Ite Logo" class="w-32 h-32 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0MUO1GJMhad65QiQT0wTQrfor_k29-vVJ-FvKdF9qoxqmWmwuGZwXuUjZlhV_shSYIZdmFJSo8tmGeyus0gSZxc6PhJUSsmQXo7BiDj20x9gKRYaKTYrml74OHhZgUwQVcd5jpRFYhu0y9YcyJNHY27IQPwWkwQ3Dx2g-FrRwV9vdbrZj9ERgFbzB9sF8-x9XIq_W99HQYSlFyBdvPPSDZhxIrPk8eraa80b6cvGxrUrTHDb9SIwF0nsvVi52FCAnLyUn5UaeyWk" />
      </div>
      <p class="font-headline font-extrabold text-2xl text-center text-on-surface tracking-tight">Únete a la Red de Movilidad</p>
      <p class="text-on-surface-variant text-sm text-center mt-2">Completa tu perfil profesional para empezar a recibir pasajeros.</p>
    </div>

    <!-- Registration Form Card -->
    <div class="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/15 mb-12">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Full Name -->
        <div class="space-y-2">
          <label class="block font-label font-semibold text-sm text-on-surface ml-1" for="full_name">Nombre Completo</label>
          <input v-model="form.name" class="w-full bg-gray-50 border border-outline-variant/30 rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-brand-green outline-none transition-all" id="full_name" placeholder="Ej. Juan Pérez" type="text" required/>
        </div>
        
        <!-- Phone Number -->
        <div class="space-y-2">
          <label class="block font-label font-semibold text-sm text-on-surface ml-1" for="phone">Número de Teléfono</label>
          <input v-model="form.phone" class="w-full bg-gray-50 border border-outline-variant/30 rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-brand-green outline-none transition-all" id="phone" placeholder="+51 900 000 000" type="tel" required/>
        </div>

        <!-- Vehicle Type -->
        <div class="space-y-2">
          <label class="block font-label font-semibold text-sm text-on-surface ml-1" for="vehicle_type">Tipo de Vehículo</label>
          <select v-model="form.vehicle" class="w-full bg-gray-50 border border-outline-variant/30 rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none" id="vehicle_type">
            <option value="taxi">Taxi (Auto Particular)</option>
            <option value="combi">Combi / Van</option>
          </select>
        </div>

        <!-- Driving Zone -->
        <div class="space-y-2">
          <label class="block font-label font-semibold text-sm text-on-surface ml-1" for="zone">Zona de Conducción</label>
          <select v-model="form.zone" class="w-full bg-gray-50 border border-outline-variant/30 rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-brand-green outline-none transition-all appearance-none" id="zone">
            <option value="centro">Centro</option>
            <option value="playa">Playa</option>
            <option value="norte">Ite Norte</option>
          </select>
        </div>

        <!-- Availability Toggle -->
        <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-brand-green-vibrant">check_circle</span>
            <span class="font-label font-medium text-on-surface">Disponible ahora</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="form.available" class="sr-only peer">
            <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
          </label>
        </div>

        <!-- Register Button -->
        <div class="pt-4">
          <button class="w-full bg-brand-gold text-on-surface font-headline font-bold py-5 rounded-full shadow-lg active:scale-[0.98] transition-all hover:brightness-105" type="submit">Registrar Perfil</button>
          <p class="text-center text-[10px] text-on-surface-variant mt-4 px-4">Al registrarte, aceptas nuestros <a class="font-semibold hover:underline text-brand-blue" href="#">términos de servicio</a> y políticas de privacidad.</p>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '../components/layout/DefaultLayout.vue'

const router = useRouter()
const form = reactive({
  name: '',
  phone: '',
  vehicle: 'taxi',
  zone: 'centro',
  available: true
})

const handleSubmit = () => {
  // Simulate API call
  console.log('Form submitted:', form)
  router.push('/exito')
}
</script>
