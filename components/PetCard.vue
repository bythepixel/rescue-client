<template>
  <article class="card">
    <div class="card-image">
      <figure class="image">
        <img 
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image">
      </figure>
    </div>

    <div class="card-content">
      <h1>{{ petData.name }}</h1>
      <p>{{ petData.age }} years, {{ petData.breed }}</p>
      <div>${{ petData.fee }}</div>
    </div>

  </article>
</template>

<script>
export default {
  name: 'PetCard',
  props: {
    petData: {
      type: Object,
      default: () => {
        return {
          name: 'spike',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 160px;
  float: left;
  margin-right: 1rem;
}
</style>
