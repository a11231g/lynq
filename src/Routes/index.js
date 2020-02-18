import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from '../screens/Home'

class Routes extends React.PureComponent {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default connect(null)(Routes)
