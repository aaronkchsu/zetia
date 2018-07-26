import React from 'react'
import ReactDOM from 'react-dom'
import PandoGame from './game.js'

export const renderGameApp = () => {
  const AppRootElement = document.getElementById('app')
  ReactDOM.render(<PandoGame />, AppRootElement)
}
