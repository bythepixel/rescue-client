import Dexie from 'dexie'
import { getDogs } from './httpService'

export { setPets, getPets, getPet }

var db = new Dexie('Rescue')

function setPets() {
  db.version(1).stores({
    pets: 'name,breed,description,age,birth,weight,fee',
  })

  return getDogs().then(
    r => {
      return db.pets.bulkPut(r.data)
    },
    e => {
      console.error(e)
    },
  )
}

function getPets() {
  return db.pets.toArray()
}

function getPet(name) {
  return db.pets.get(name)
}

// db.pets
//   .put({
//     name: 'Yoshi',
//     species: 'Dog',
//     breed: 'Great Dane',
//     description: 'Just the best, except when she eats other dogs',
//     age: '8',
//     birth: 'Unknown',
//     weight: '100lbs',
//     fee: 100000,
//   })
//   .then(function() {
//     return db.pets.get('Yoshi')
//   })
//   .then(function(pet) {
//     console.log(pet.name + ' is an awesome ' + pet.breed)
//   })
//   .catch(function(error) {
//     alert('Ooops: ' + error)
//   })
