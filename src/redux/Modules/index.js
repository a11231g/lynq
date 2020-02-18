import { saga as beer } from './beer'
import { saga as beerWithPizza } from './beerWithPizza'
import { saga as beerWithSteak } from './beerWithSteak'

const sagas = [...beer, ...beerWithPizza, ...beerWithSteak]

export default sagas
