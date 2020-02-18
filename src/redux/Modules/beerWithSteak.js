import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchBeer } from '../../lib/beer/index'

export const LOAD = 'lynq/beerWithSteak/LOAD'
export const LOAD_SUCCESSFUL = 'lynq/beerWithSteak/Load_SUCCESSFUL'
export const LOAD_FAILURE = 'lyn1/beerWithSteak/LOAD_FAILURE'

const initialState = {
  AllBeers: [],
  loading: false,
  loaded: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        AllBeers: action.data
      }
    case LOAD_FAILURE:
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
export function load () {
  return {
    type: LOAD
  }
}

export function loadFailure () {
  return {
    type: LOAD_FAILURE
  }
}
export function loadSuccessfulALL (data) {
  return {
    type: LOAD_SUCCESSFUL,
    data
  }
}
export function * watchLoadWithPizzaSaga () {
  try {
    const beers = yield call(fetchBeer, 'steak')
    yield put(loadSuccessfulALL(beers))
  } catch (error) {
    // yield put(handleError(error));
  }
}

export function * watchLoadWithPizza () {
  yield takeEvery(LOAD, watchLoadWithPizzaSaga)
}

export const saga = [watchLoadWithPizza]
