//index.js
// importing the react and react-dom package

import React from 'react'
//da react 19 invece di import reactdom ci vuole import {createRoot} con questo from
import { createRoot } from 'react-dom/client'
import imgGiuseppe from './images/foto_CV.jpg'


//creo variabile per attaccarlo all'index.html in questo caso con la classe
const rootElement = document.querySelector('.root')
//variabile per immettere il rootElement dentro il createRoot
const root = createRoot(rootElement)


const user = (
  <div>
    <img width="200px" src={imgGiuseppe} />
  </div>
)

const annoNascita = 1992
const annoAttuale = new Date().getFullYear()
const età = annoAttuale - annoNascita
const etàPersonale = <h6>Anni: {età}</h6>
const title = "Ciao Giuseppe"
const subtitle = "Sottotitoli"
const languageUsed = "Libreria usata React"
const author = {
  firstName: "Giuseppe",
  lastName: "De Rosa",
}
const date = "12-07-2025"
const titleFooter = "Giuseppe De Rosa Copyright 2025"
const numOne = 2
const numTwo = 3
const techs = ["HTML", "CSS", "JavaScript"]
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
const number = [1, 2, 3, 4, 5];
const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}


//creo costante skillsoperator che è un array dentro tot. array con tot. valori
const skillsoperator = [
  ['HTML', 10, "ciao matteio"],
  ['CSS', 8, "ciao matteio"],
  ['LARAVEL', 4, "ciao matteio"],
  ['PHP', 6, "ciao matteio"],
]

//SKILL COMPONENT
const Skill = ({ skill: [tech, level, nome] }) => (
  <li>{tech} {level} {nome}</li>
)

//SKILLS COMPONENT
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  return <ul>{skillsList}</ul>
}

//CREO ARRAY DI OGGETTI
const countriesCity = [
  { names: "Finland", city: "Helsinki" },
  { names: "Italy", city: "Naples" },
  { names: "Portugal", city: "Lisbon" },
  { names: "Espana", city: "Madrid" },
]

//COUNTRY COMPINENT
const Country = ({ country: { names, city } }) => {
  return (
    <div>
      <h2>{names}</h2>
      <h2>{city}</h2>
    </div>
  )
}

//COUNTRIES COMPONENT
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />)
  return <div>{countryList}</div>
}

//creo variabile per HEADER
/*SE METTO LO STYLE POSSO FARE COSI
 const header = (
     <header style={{ backgroundColor: 'lightblue', color: 'red', fontSize: '15px', }}>
         <h1>Ciao Giuseppe</h1>
         <h2>Sottotitolo</h2>
         <h3>Libreria usata react</h3>
         <h4>Autore: Giuseppe De Rosa</h4>
         <h5>12/07/2025</h5>
     </header>
 )

O COSI */
// const headerStyle = { backgroundColor: 'lightblue', color: 'black', fontSize: '15px' }
// const header = (
//   // <header style={headerStyle}>
//   <header>
//     <div className='header-wrapper'>
//       <h1>{title}</h1>
//       {user}
//       <h2>{subtitle}</h2>
//       <h3>{languageUsed}</h3>
//       <p>Autore: {author.firstName} {author.lastName}</p>
//       {etàPersonale}
//       <h5>{date}</h5>
//     </div>
//   </header >
// )

const header = (
  // <header style={headerStyle}>
  <header>
    <div className='header-wrapper'>
      <h1>{title}</h1>
      {user}
      <h2>{subtitle}</h2>
      <h3>{languageUsed}</h3>
      <p>Autore: {author.firstName} {author.lastName}</p>
      {etàPersonale}
      <h5>{date}</h5>
      <h6>Skill List</h6>
      <div>
        <ul>
          <span>
            <Numbers numbers={number} />
          </span>
          <span>
            <Skills skills={skillsoperator} />
          </span>
        </ul>
      </div>
      <Countries countries={countriesCity} />
    </div>
  </header >
)

const form = (
  <form className='form-wrapper' action="http://localhost:3000/">
    <h1>Per informaizoni clicca il tasto del form.</h1>
    <p>Scrivimi</p>
    <div className='div-style'>
      <input className='pd-input' type="text" placeholder="Nome" />
      <input className='pd-input' type="text" placeholder="Cognome" />
      <input className='pd-input' type="text" placeholder="Email" />
    </div>
    <button type="submit">CLICCA QUI</button>
  </form>
)

// const mainStyle = { backgroundColor: 'red' }
const main = (
  // <main style={mainStyle}>
  <main>
    <div className='main-wrapper'>
      <p>Prerequisiti di react:</p>
      <ul>
        {techsFormatted}
        <li>Calcolo: {numOne} + {numTwo} = {numOne + numTwo}</li>
      </ul>
    </div>
    {form}
  </main>
)


// const footerStyle = {backgroundColor: 'blue', color: 'yellow' }
const footer = (
  // <footer style={footerStyle}>
  <footer>
    <div className='footer-wrapper'>
      <p>{titleFooter}</p>
    </div>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
//non più ReactDom ma root la variabile che abbiamo definito sopra
root.render(app)
