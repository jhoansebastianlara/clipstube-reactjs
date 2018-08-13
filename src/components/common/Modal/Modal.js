import React, { Component} from 'react'
import { func, string } from 'prop-types'

import './Modal.css'

class Modal extends Component {
  static propTypes = {
    handleCloseClick: func,
    modalClassName: string
  }

  static defaultProps = {
    handleCloseClick: () => {},
    modalClassName: 'Modal-medium'
  }

  render() {
    return (
      <div className="Modal-container">
        <div className={"Modal " + this.props.modalClassName}>
          {this.props.children}
          <button
            onClick={this.props.handleCloseClick}
            className="Modal-close"
          />
        </div>
      </div>
    )
  }
}

export default Modal
