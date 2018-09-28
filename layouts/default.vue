<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28">
        </a>

        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key">
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active">
              <b-icon :icon="item.icon"/> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>

    </section>
  </div>
</template>

<script>
import Dexie from 'dexie'

var db = new Dexie('Rescue')
db.version(1).stores({
  pets: 'name,breed,description,age,birth,weight,fee',
})

db.pets
  .put({
    name: 'Yoshi',
    species: 'Dog',
    breed: 'Great Dane',
    description: 'Just the best, except when she eats other dogs',
    age: '8',
    birth: 'Unknown',
    weight: '100lbs',
    fee: 100000,
  })
  .then(function() {
    return db.pets.get('Yoshi')
  })
  .then(function(pet) {
    console.log(pet.name + ' is an awesome ' + pet.breed)
  })
  .catch(function(error) {
    alert('Ooops: ' + error)
  })

console.log(db)

export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Pets', icon: 'heart', to: { name: 'petsList' } },
      ],
    }
  },
}
</script>
