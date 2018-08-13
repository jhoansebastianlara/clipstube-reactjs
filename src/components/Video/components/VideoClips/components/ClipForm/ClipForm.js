import React from 'react'
import './ClipForm.css'

const ClipForm = (props) => {
  const clipId = props.clipData.id
  const title = clipId ? 'Edit Clip' : 'New Clip'
  return (
    <form
      className="ClipForm"
      onSubmit={props.handleSubmit}
    >
      <h3 className="ClipForm-title">{title}</h3>
      <label htmlFor="name">
        Name:
        <br />
        <input
          type="text"
          placeholder="Your clips's name"
          className="input-default"
          name="name"
          autoComplete="off"
          onChange={props.handleInputChange}
          value={props.formData.name || props.clipData.name || ''}
        />
      </label>
      <div className="ClipForm-time-container">
        <label htmlFor="startTime">
          Starts at:
          <br />
          <input
            type="text"
            placeholder="HH:MM:SS"
            className="input-default time-input"
            name="startTime"
            autoComplete="off"
            onChange={props.handleInputChange}
            value={props.formData.startTime || props.clipData.startTime || ''}
          />
        </label>
        <label htmlFor="endTime">
          Ends at:
          <br />
          <input
            type="text"
            placeholder="HH:MM:SS"
            className="input-default time-input"
            name="endTime"
            autoComplete="off"
            onChange={props.handleInputChange}
            value={props.formData.endTime || props.clipData.endTime || ''}
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn-small ClipForm-submit-button"
        disabled={props.loading}
      >
        Save
      </button>
    </form>
  )
}

export default ClipForm
