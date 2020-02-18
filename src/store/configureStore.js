import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../redux/index'
import sagas from '../redux/Modules/index'

export default function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  let middlewares = applyMiddleware(sagaMiddleware)
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    combineReducers(reducers()),
    initialState,
    composeEnhancers(middlewares)
  )

  sagas.map(sagaMiddleware.run)

  return store
}
