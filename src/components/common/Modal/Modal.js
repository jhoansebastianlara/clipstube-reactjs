import React from 'react'
import './Modal.css'

const Modal = (props) => {
  const modalClassName = props.modalClassName || 'Modal-medium'
  return (
    <div className="Modal-container">
      <div className={"Modal " + modalClassName}>
        {props.children}
        <button
          onClick={props.handleCloseClick}
          className="Modal-close"
        />
      </div>
    </div>
  )
}

export default Modal
