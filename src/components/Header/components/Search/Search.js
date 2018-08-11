import React from 'react'
import './Search.css'

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Search"
      className="input-default"
      name="search"
      autoComplete="off"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
