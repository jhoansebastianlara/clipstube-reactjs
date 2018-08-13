import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../components/Home'
import Video from '../components/Video'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route key="home" path="/" component={Home} exact />
        <Route key="video" path="/watch/:videoId" component={Video} />
        <Redirect from='*' to='/' />
      </Switch>
    )
  }
}

export default Routes
