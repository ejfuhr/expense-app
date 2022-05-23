console.log('destructuring...')
const person = {
    name: 'Fidel',
    age: '98',
    location: {
        city: 'abq',
        temperature: 102
    }
}

const {name, age } = person

const address = [
    '1299 juniper',
    'santa municiple',
    'west wisconsin',
    '10925'
]

const [ street, city, state, zip] = address

console.log(`you are at ${street} in ${city}`)