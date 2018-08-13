import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../../../../../actions'
import ModalPortal from '../../../../../common/Modal/ModalPortal'
import Modal from '../../../../../common/Modal'
import ClipsHeader from './ClipsHeader'
import ClipForm from '../ClipForm'

class ClipsHeaderContainter extends Component {
  state = {
    modalVideoFormId: 'modalClipFormVisible'
  }
  handleOpenModal = () => {
    this.props.actions.openModal(this.state.modalVideoFormId)
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal(this.state.modalVideoFormId)
  }

  render() {
    return (
      <ClipsHeader>
        <h3>Clips</h3>
        <button
          className="btn-small"
          onClick={this.handleOpenModal}
        >
          +
        </button>
        {
          this.props.modalClipFormVisible &&
          <ModalPortal>
            <Modal
              handleCloseClick={this.handleCloseModal}
              modalClassName="Modal-small"
            >
              <ClipForm
                videoId={this.props.video.id}
                onFormSubmitted={this.handleCloseModal}
              />
            </Modal>
          </ModalPortal>
        }
      </ClipsHeader>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    modalClipFormVisible: state.modal.modalClipFormVisible,
    video: state.data.video
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipsHeaderContainter)
