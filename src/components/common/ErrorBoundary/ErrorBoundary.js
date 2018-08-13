import React, { Component } from 'react'
import './ErrorBoundary.scss'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  /**
  * Error boundaries catch errors during rendering, in lifecycle methods,
  * and in constructors of the whole tree below them.
  */
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <h1>Something went wrong.</h1>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
