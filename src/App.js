import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'
// components
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Home from './components/Home'
import Video from './components/Video'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Header />
          <div className="App-container">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/watch/:videoId" component={Video} />
            </Switch>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
