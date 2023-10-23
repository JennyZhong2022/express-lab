const students = [
  { name: 'Jen', id:1, gender: 'female' },
  { name: 'Ben',id:2, gender: 'male' },
  {name:'Victor',id:3,gender:'not sure'},
  {name:'Dan',id:4,gender:'who knows'}
]

module.exports = {
  getAll:()=> {
    return students
  },
  getOne:(id)=> {
    return students.find(student => 
      student.id===parseInt(id)
    );
}
}