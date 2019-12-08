import list from './movieList'

const length = list.length
let random = 1
let lastRandom = 0

const getRandomName = () => {
  lastRandom = random
  random = Math.floor(Math.random() * length)

  if (lastRandom === random) return getRandomName()
  else return list[random]
}

export default getRandomName
