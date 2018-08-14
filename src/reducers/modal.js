import { OPEN_MODAL, CLOSE_MODAL } from '../action-types'
const initialState = {
  visibility: false,
  modalData: {}
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const {modalId, data} = action.payload
      return {
        ...state,
        [modalId]: true,
        visibility: true,
        modalData: data || {}
      }
    }
    case CLOSE_MODAL: {
      const {modalId} = action.payload
      return {
        ...state,
        [modalId]: false,
        visibility: false,
        modalData: {}
      }
    }
    default:
      return state
  }
}

export default modal
