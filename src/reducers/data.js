import { SEARCH_VIDEOS } from '../action-types'
import jsonData from '../data.json'
const initialState = {
  playlist: jsonData.playlist,
  playlistArray: Object.keys(jsonData.playlist).map(key => jsonData.playlist[key]),
  searchResults: [],
  searchText: ''
}

const data = (state = initialState, action) => {
  switch (action.type) {
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
