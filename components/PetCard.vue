<template>
  <article class="card">
    <h1>{{ name }}</h1>
  </article>
</template>

<script>
export default {
  name: 'PetCard',

  data() {
    return {
      name: 'Spike',
      age: '12 week',
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
