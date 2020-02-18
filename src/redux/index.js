import Beer from './Modules/beer'
import beerWithPizza from './Modules/beerWithPizza'
import beerWithSteak from './Modules/beerWithSteak'
import shoppingCard from './Modules/shoppingCard'

const rootReducers = {
  Beer,
  shoppingCard,
  beerWithPizza,
  beerWithSteak
}

const whitelist = ['Beer', 'beerWithPizza', 'shoppingCard', 'beerWithSteak']

export { rootReducers, whitelist }
