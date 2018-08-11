import { OPEN_MODAL, CLOSE_MODAL, SEARCH_VIDEOS } from '../action-types'

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const searchVideos = (searchText) => {
  return {
    type: SEARCH_VIDEOS,
    payload: {
      searchText
    }
  }
}
