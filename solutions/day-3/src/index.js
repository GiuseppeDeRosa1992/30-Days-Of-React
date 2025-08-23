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
const text = "CLICCA QUI"
//creo costante usercard e gli passo l'oggetto che poi mi serve nella props ...author mi serve per recuperare i dati di un'altra costante quella sopra (...spred operator)
const usercard = { ...author, image: imgGiuseppe }


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
// const headerStyle = { backgroundColor: 'lightblue', color: 'black', fontSize: '15px' }  COSI SENZA PROPS
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

//PROPS BUTTON
const Button = (props) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

//COSI CON PROPS
const Header = (props) => {
  return (
    // <header style={headerStyle}>
    <header>
      <div className='header-wrapper'>
        <h1>{props.title}</h1>
        {props.user}
        <h2>{props.subtitle}</h2>
        <h3>{props.languageUsed}</h3>
        <p>Autore: {props.author.firstName} {props.author.lastName}</p>
        {props.etàPersonale}
        <h5>{props.date}</h5>
      </div>
    </header >
  )
}

const form = (
  <form className='form-wrapper' action="http://localhost:3000/">
    <h1>Per informaizoni clicca il tasto del form.</h1>
    <p>Scrivimi</p>
    <div className='div-style'>
      <input className='pd-input' type="text" placeholder="Nome" />
      <input className='pd-input' type="text" placeholder="Cognome" />
      <input className='pd-input' type="text" placeholder="Email" />
    </div>
    <button type="submit">{text}</button>
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

// CREO LA COSTANTE USERCARD COME PROPS GLI PASSO UN OGGETTO E DOPO PASSO TUTTO IN CONST APP COME COMPONENTE I DATI DELLE PROPS LI PRENDE DA SOPRA NELLA CONST usercard
const UserCard = ({ usercard: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img width="300px" src={image} alt={firstName} />
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
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

const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  const greetPeople = () => {
    alert('Ciao benvenuto in React che ti fa uscire di testa')
  }
  return (
    <div className='app'>
      {/* LA PRIMA è LA CHIAVE DELLA PROPS CHE è UGUALE AL VALORE DELLA COSTANTE */}
      <Header
        title={title}
        user={user}
        subtitle={subtitle}
        languageUsed={languageUsed}
        author={author}
        etàPersonale={etàPersonale}
        date={date}
      />
      {/* COSì SERVE LA FUZNIONE SOPRA INVECE NEL BUTTON SOTTO FA LA FUZNIONE CHE RESTITUISCE UN ALERT DIRETTAMENTE DENTRO IL BUTTON
      <Button
        onClick={sayHi}
        text={text}
      /> */}
      <Button
        onClick={() => alert('Hi')}
        text={text}
      />
      {/* ESEMPIO CON FUNZIONE PRESA DA SOPRA DALLA CONST GREETPEOPLE */}
      <Button
        text='Greet People'
        onClick={greetPeople}
      />
      {/* QUI INVECE ESEMPIO DI FUZNIONE DIRETTAMENTE IN ON CLICK */}
      <Button
        text='Show Time'
        onClick={() => alert(new Date())}
      />
      {main}
      {/* CREO LA CONST USERCARD E NELLA PROPS GLI PASSO LE PROPS COME UN ARRAY usercard VEDERE SOPRA LA CONST USERCARD */}
      <UserCard
        usercard={usercard}
      />
      {footer}
    </div>
  )
}
//non più ReactDom ma root la variabile che abbiamo definito sopra
root.render(<App />)
