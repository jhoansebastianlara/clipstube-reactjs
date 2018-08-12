import {
  SEARCH_VIDEOS,
  GET_VIDEO,
  GET_VIDEO_CLIP,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../action-types'

export const searchVideos = (searchText) => {
  return {
    type: SEARCH_VIDEOS,
    payload: {
      searchText
    }
  }
}

export const getVideo = (videoId) => {
  return {
    type: GET_VIDEO,
    payload: {
      videoId
    }
  }
}

export const getVideoClip = (clipId) => {
  return {
    type: GET_VIDEO_CLIP,
    payload: {
      clipId
    }
  }
}

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
