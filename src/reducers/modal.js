import { OPEN_MODAL, CLOSE_MODAL } from '../action-types'
const initialState = {
  visibility: false
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        visibility: true
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        visibility: false
      }
    }
    default:
      return state
  }
}

export default modal
