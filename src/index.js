import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import data from './data.json'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/data'

const initialState = {
  data: {
    ...data,
  },
  search: [],
  searchText: ''
}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
