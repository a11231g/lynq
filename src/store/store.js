import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootReducers, whitelist } from '../redux/index'
import sagas from '../redux/Modules/index'

const config = {
  key: 'root',
  storage,
  whitelist
}

const middleware = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

const persistedreducers = persistCombineReducers(config, rootReducers)
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const enhancers = [applyMiddleware(...middleware)]
const persistConfig = { enhancers }
export const store = createStore(
  persistedreducers,
  undefined,
  composeEnhancers(...enhancers)
)

export const persistor = persistStore(store, persistConfig)

sagas.map(sagaMiddleware.run)
