import {
  CREATE_VIDEO,
  GET_VIDEO,
  CREATE_VIDEO_CLIP,
  UPDATE_VIDEO_CLIP,
  REMOVE_VIDEO_CLIP,
  GET_VIDEO_CLIP,
  SEARCH_VIDEOS
} from '../action-types'
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
    case CREATE_VIDEO: {
      const playlist = {...state.playlist}
      const clips = {...state.clips}
      const {data} = action.payload
      const fitstVideoClipId = Date.now().toString()
      let video = {
        ...data,
        id: Date.now().toString(),
        clips: [fitstVideoClipId]
      }
      let playlistArray
      let firstVideoClip

      // first videoclip should be the original video
      firstVideoClip = {
        id: fitstVideoClipId,
        videoId: video.id,
        name: 'ORIGINAL',
        startTime: null,
        endTime: null,
        original: true
      }

      playlist[video.id] = video
      clips[fitstVideoClipId] = firstVideoClip
      playlistArray = Object.keys(playlist).map(key => playlist[key])

      return {
        ...state,
        playlist,
        clips,
        playlistArray
      }
    }
    case GET_VIDEO: {
      const {videoId} = action.payload
      const video = state.playlist[videoId]
      const videoClips = video.clips
      const videoNotFound = !video

      return {
        ...state,
        video: video || {},
        videoNotFound,
        videoClips,
        videoClip: {},
        videoClipNotFound: false
      }
    }
    case CREATE_VIDEO_CLIP: {
      const clips = {...state.clips}
      const playlist = {...state.playlist}
      // const videoClips = [...state.videoClips]
      const {data} = action.payload
      const videoClip = {
        ...data,
        id: Date.now().toString()
      }
      let videoClips
      // create clip
      clips[videoClip.id] = videoClip
      // The clip reference is added to the corresponding video
      playlist[videoClip.videoId].clips = playlist[videoClip.videoId].clips.concat([videoClip.id])
      // the clip is added to the current clips list
      videoClips = [...playlist[videoClip.videoId].clips]

      return {
        ...state,
        clips,
        playlist,
        videoClips
      }
    }

    case UPDATE_VIDEO_CLIP: {
      const clips = {...state.clips}
      const videoClipEdit = {...action.payload.data}
      let videoClip = {...state.videoClip}
      // update clip
      clips[videoClipEdit.id] = videoClipEdit
      // update current clip if necessary
      if (videoClip && videoClipEdit.id === videoClip.id) {
        videoClip = videoClipEdit
      }

      return {
        ...state,
        clips,
        videoClip
      }
    }

    case REMOVE_VIDEO_CLIP: {
      const {clipId} = {...action.payload}
      const clips = {...state.clips}
      const videoClips = [...state.videoClips]
      const clipRemove = clips[clipId]
      const playlist = {...state.playlist}
      const clipsArray = playlist[clipRemove.videoId].clips

      delete clips[clipId]

      let indexClipRemove = clipsArray.indexOf(clipId)
      if (indexClipRemove > -1) {
        clipsArray.splice(indexClipRemove, 1)
        playlist[clipRemove.videoId].clips = clipsArray
      }

      indexClipRemove = videoClips.indexOf(clipId)
      if (indexClipRemove > -1) {
        videoClips.splice(indexClipRemove, 1)
      }

      return {
        ...state,
        clips,
        playlist,
        videoClips
      }
    }

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
