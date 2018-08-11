let data = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      const {searchText} = action.payload
      const {playlist} = state.data
      let results = []

      if (searchText) {
        results = playlist.filter(video => {
          return video.title.toLowerCase().includes(searchText.toLowerCase())
        })
      }

      return {
        ...state,
        search: results,
        searchText
      }
    }
    default:
      return state
  }
}

export default data
