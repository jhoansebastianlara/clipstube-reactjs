import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import Header from './Header'
import Search from './components/Search'
import ModalPortal from '../common/Modal/ModalPortal'
import Modal from '../common/Modal'
import VideoForm from '../VideoForm'

class HeaderContainter extends Component {
  state = {}

  handleOpenModal = () => {
    this.props.actions.openModal()
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }

  render () {
    return (
      <Header>
        <NavLink
          to={'/'}
          className="Header-logo"
        >
          <span>You</span>
          <span>Clips</span>
        </NavLink>

        <Search />

        <div className="body">
          <button
            className="btn-small"
            onClick={this.handleOpenModal}
          >
            +
          </button>
          {
            this.props.modalVisible &&
            <ModalPortal>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoForm />
              </Modal>
            </ModalPortal>
          }
        </div>
      </Header>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    modalVisible: state.modal.visibility
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainter)
