import {
  SEARCH_VIDEOS,
  CREATE_VIDEO,
  GET_VIDEO,
  CREATE_VIDEO_CLIP,
  UPDATE_VIDEO_CLIP,
  REMOVE_VIDEO_CLIP,
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

export const createVideo = (data) => {
  return {
    type: CREATE_VIDEO,
    payload: {
      data
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

export const createVideoClip = (data) => {
  return {
    type: CREATE_VIDEO_CLIP,
    payload: {
      data
    }
  }
}

export const updateVideoClip = (data) => {
  return {
    type: UPDATE_VIDEO_CLIP,
    payload: {
      data
    }
  }
}

export const removeVideoClip = (clipId) => {
  return {
    type: REMOVE_VIDEO_CLIP,
    payload: {
      clipId
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

export const openModal = (modalId, data = null) => {
  return {
    type: OPEN_MODAL,
    payload: {
      modalId,
      data
    }
  }
}

export const closeModal = (modalId) => {
  return {
    type: CLOSE_MODAL,
    payload: {
      modalId
    }
  }
}
