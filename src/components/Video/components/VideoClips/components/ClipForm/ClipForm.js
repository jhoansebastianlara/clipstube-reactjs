import React from 'react'
import { object, func } from 'prop-types'

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
          maxLength={100}
          required
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
            pattern="[0-5][0-9]:[0-5][0-9]:[0-5][0-9]"
            title="HH:MM:SS"
            maxLength={8}
            required
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
            onBlur={props.onBlurInputTime}
            value={props.formData.endTime || props.clipData.endTime || ''}
            pattern="[0-5][0-9]:[0-5][0-9]:[0-5][0-9]"
            title="HH:MM:SS"
            maxLength={8}
            required
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

ClipForm.propTypes = {
  handleSubmit: func,
  handleInputChange: func,
  onBlurInputTime: func,
  formData: object,
  clipData: object
}

export default ClipForm
