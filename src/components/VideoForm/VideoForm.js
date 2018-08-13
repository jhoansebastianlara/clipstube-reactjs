import React from 'react'
import './VideoForm.css'

const VideoForm = (props) => {
  const title = props.isEditForm ? 'Edit Video' : 'New Video'
  return (
    <form
      className="VideoForm"
      onSubmit={props.handleSubmit}
    >
      <h3 className="VideoForm-title">{title}</h3>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          placeholder="Your video's title"
          className="input-default"
          name="title"
          autoComplete="off"
          onChange={props.handleInputChange}
          value={props.formData.title}
        />
      </label>
      <label htmlFor="url">
        Video URL:
        <input
          type="text"
          placeholder="i.e http://example.com/videos/video.mp4"
          className="input-default"
          name="url"
          autoComplete="off"
          onChange={props.handleInputChange}
          value={props.formData.url}
        />
      </label>

      <button
        type="submit"
        className="btn-small VideoForm-submit-button"
      >
        Save
      </button>
    </form>
  )
}

export default VideoForm
