export const ADD = 'lynq/shoppingCard/ADD'
export const Minus = 'lynq/shoppingCard/Minus'
export const EXPAND = 'lyn1/shoppingCard/EXPAND'
export const EXPANDFULL = 'lyn1/shoppingCard/EXPANDFULL'
export const CLOSE = 'lyn1/shoppingCard/CLOSE'
export const OPEN = 'lyn1/shoppingCard/OPEN'
export const INCREASE = 'lyn1/shoppingCard/INCREASE'
export const DECREASE = 'lyn1/shoppingCard/DECREASE'
export const DELETE = 'lyn1/shoppingCard/DECREASE'

const initialState = {
  items: {},
  expand: false,
  expandFull: false,
  fistItem: null,
  totalPrice: 0
}

export default function reducer (state = initialState, action = {}) {
  let totalPrice = 0
  let items = {}
  let calc = {}
  switch (action.type) {
    case ADD:
      calc = checkForAdd(state.items, action.beer)
      totalPrice = calc.price
      items = calc.items
      return {
        ...state,
        expand: true,
        firstItem: action.beer.id,
        items: items,
        totalPrice
      }
    case DELETE:
      calc = deleteItemHandle(state.items, action.item)
      items = calc.items
      totalPrice = calc.price
      return {
        ...state,
        items: items,
        totalPrice
      }
    case INCREASE:
      calc = checkForCount(state.items, action.item, INCREASE)
      items = calc.items
      totalPrice = calc.price
      return {
        ...state,
        items,
        totalPrice
      }
    case DECREASE:
      calc = checkForCount(state.items, action.item, DECREASE)
      items = calc.items
      totalPrice = calc.price
      return {
        ...state,
        items,
        totalPrice
      }
    case CLOSE:
      return {
        ...state,
        expand: false,
        expandFull: false
      }
    case OPEN:
      return {
        ...state,
        expand: true,
        expandFull: true
      }
    case Minus:
      return {
        ...state,
        loading: false,
        AllBeers: action.data
      }
    case EXPAND:
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action.data
      }
    default:
      return state
  }
}
export function add (beer) {
  return {
    type: ADD,
    beer
  }
}

export function deleteItem (item) {
  return {
    type: DECREASE,
    item
  }
}

export function close () {
  return {
    type: CLOSE
  }
}

export function open () {
  return {
    type: OPEN
  }
}

function checkForAdd (prev, newBeer) {
  const beerID = newBeer.id
  if (prev[beerID]) {
    const count = prev[beerID].count
    const temp = { ...prev }
    temp[beerID].count = count + 1
    return temp
  } else {
    const tempBeer = { ...newBeer }
    tempBeer.count = 1
    const items = { ...prev, ...{ [beerID]: tempBeer } }
    console.log(items)
    return { items, price: calcualtePrice(items) }
  }
}

export function increase (item) {
  return {
    type: INCREASE,
    item
  }
}

export function decrease (item) {
  console.log(item)
  return {
    type: DECREASE,
    item
  }
}
function checkForCount (prev, item, type) {
  const temp = { ...prev }

  if (type === INCREASE && temp[item.id]) {
    temp[item.id].count = temp[item.id].count + 1
    return { items: temp, price: calcualtePrice(temp) }
  } else if (type === DECREASE && temp[item.id]) {
    temp[item.id].count = temp[item.id].count - 1
    if (temp[item.id].count === 0) {
      delete temp[item.id]
    }
    return { items: temp, price: calcualtePrice(temp) }
  }
  return { items: temp, price: calcualtePrice(temp) }
}

function deleteItemHandle (prev, item) {
  const temp = { ...prev }
  delete temp[item.id]
  return { items: temp, price: calcualtePrice(temp) }
}

function calcualtePrice (items) {
  let price = 0
  Object.keys(items).map(key => {
    return (price = price + items[key].count * items[key].abv)
  })
  return price
}
