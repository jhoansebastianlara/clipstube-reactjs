import React from 'react'
import './Modal.css'

const Modal = (props) => (
  <div className="Modal-container">
    <div className="Modal">
      {props.children}
      <button
        onClick={props.handleClick}
        className="Modal-close"
      />
    </div>
  </div>
)

export default Modal
