const students = [
  { name: 'Jen', gender: 'female' },
  { name: 'Ben', gender: 'male' },
  {name:'Victor',gender:'not sure'},
  {name:'Dan',gender:'who knows'}
]

module.exports = {
  getAll:function() {
    return students
  }
}