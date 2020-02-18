import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import './styles/globalCss.css'

import Routes from './Routes'
import withRoot from './styles/withRoot'
import { store, persistor } from './store/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiThemeProvider>
            <React.Fragment>
              <Routes />
            </React.Fragment>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default withRoot(App)
