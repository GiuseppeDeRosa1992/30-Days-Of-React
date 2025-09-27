//index.js
// importing the react and react-dom package

import React from 'react'
//da react 19 invece di import reactdom ci vuole import {createRoot} con questo from
import { createRoot } from 'react-dom/client'
import style from './style/style.css'
import header from './components/Header.js'
import main from './components/Main.js'
import footer from './components/Footer.js'


//creo variabile per attaccarlo all'index.html in questo caso con la classe
const rootElement = document.querySelector('.root')
//variabile per immettere il rootElement dentro il createRoot
const root = createRoot(rootElement)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
//non più ReactDom ma root la variabile che abbiamo definito sopra
root.render(app)
