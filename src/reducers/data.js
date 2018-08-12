import { GET_VIDEO, GET_VIDEO_CLIP, SEARCH_VIDEOS } from '../action-types'
import jsonData from '../data.json'

const initialState = {
  playlist: jsonData.playlist,
  clips: jsonData.clips,
  playlistArray: Object.keys(jsonData.playlist).map(key => jsonData.playlist[key]),
  searchResults: [],
  searchText: '',
  // current loaded video data
  video: {},
  videoClips: [],
  videoNotFound: false,
  // current videoclip loaded
  videoClip: {},
  videoClipNotFound: false
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_CLIP: {
      const {clipId} = action.payload
      const videoClip = state.clips[clipId]
      const videoClipNotFound = !videoClip

      return {
        ...state,
        videoClip: videoClip || {},
        videoClipNotFound
      }
    }
    case GET_VIDEO: {
      const {videoId} = action.payload
      const video = state.playlist[videoId]
      const videoNotFound = !video

      return {
        ...state,
        video: video || {},
        videoNotFound,
        videoClip: {},
        videoClipNotFound: false
      }
    }
    case SEARCH_VIDEOS: {
      const {searchText} = action.payload
      let searchResults = []

      if (searchText) {
        searchResults = state.playlistArray.filter(video => {
          return video.title.toLowerCase().includes(searchText.toLowerCase())
        })
      }

      return {
        ...state,
        searchResults,
        searchText
      }
    }
    default:
      return state
  }
}

export default data
