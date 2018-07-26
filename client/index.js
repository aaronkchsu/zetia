import React from 'react'
import ReactDOM from 'react-dom'
import PandoGame from './game.js'

export const renderGameApp = (domElementID) => {
  const AppRootElement = document.getElementById(domElementID)
  ReactDOM.render(<PandoGame />, AppRootElement)
}

export const renderGameIntoDom = (domElementID) => {
  renderGameApp(domElementID)
}
