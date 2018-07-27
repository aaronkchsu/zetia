import React from 'react'
import ReactDOM from 'react-dom'
import PandoGame from './game.js'

export const renderGameApp = (domElement) => {
  const AppRootElement = document.getElementById(domElement)
  ReactDOM.render(<PandoGame />, AppRootElement)
}

export const renderGameIntoDom = (domElement) => {
  renderGameApp(domElement)
}
