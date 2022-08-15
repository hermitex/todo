const initButton = document.querySelector('#init')
initButton.addEventListener('click', () => {
  const initialState = {
    family: [
      { name: 'Marcus', shoeSize: 46, birthYear: 1972 },
      { name: 'Elin', shoeSize: 36, birthYear: 1977 },
      { name: 'Arvid', shoeSize: 36, birthYear: 2010 },
      { name: 'Gustav', shoeSize: 32, birthYear: 2010 },
      { name: 'Albert', shoeSize: 35, birthYear: 2008 }
    ]
  }

  localStorage.setItem('myAppState', JSON.stringify(initialState))
});

const logButton = document.querySelector('#log')
logButton.addEventListener('click', () => {
  const state = JSON.parse(localStorage.getItem('myAppState'))
  console.log(state)
  console.table(state.family)
})