import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchBeer } from '../../lib/beer/index'

export const LOAD = 'lynq/beer/LOAD'
export const SORT = 'lynq/beer/SORT'
export const LOAD_SUCCESSFUL = 'lynq/beer/Load_SUCCESSFUL'
export const LOAD_FAILURE = 'lyn1/beer/LOAD_FAILURE'

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
    case SORT:
      return {
        ...state,
        AllBeers: [
          ...state.AllBeers.sort(function compare (a, b) {
            if (a.abv > b.abv) return action.kind === 'cheap' ? 1 : -1
            if (b.abv > a.abv) return action.kind === 'cheap' ? -1 : 1

            return 0
          })
        ]
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
export function * watchLoadSaga () {
  try {
    const beers = yield call(fetchBeer)
    yield put(loadSuccessfulALL(beers))
  } catch (error) {
    // yield put(handleError(error));
  }
}

export function * watchLoad () {
  yield takeEvery(LOAD, watchLoadSaga)
}

export const saga = [watchLoad]

export function sort (kind) {
  return {
    type: SORT,
    kind
  }
}
