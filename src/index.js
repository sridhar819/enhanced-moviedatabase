import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
