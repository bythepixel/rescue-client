<template>
  <section class="section">
    <h1 class="title is-3 has-text-grey">Pets</h1>
    <!-- <pre>{{ $store.state.pets }}</pre> -->
    <PetCard 
      v-for="pet in $store.state.pets"
      :key="pet.id"
      :pet-data="pet" />

    <PetCard />
    <PetCard />

  </section>
</template>

<script>
import PetCard from '@/components/PetCard'

export default {
  name: 'HomePage',
  components: { PetCard },
}
</script>
