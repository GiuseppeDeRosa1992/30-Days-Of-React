import imgGiuseppe from '../images/foto_CV.jpg'


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

const annoNascita = 1992
const annoAttuale = new Date().getFullYear()
const età = annoAttuale - annoNascita
const etàPersonale = <span>Anni: {età}</span>
const title = "Ciao Giuseppe"
// const subtitle = "Sottotitoli"
const languageUsed = "Libreria usata React"
const author = {
    firstName: "Giuseppe",
    lastName: "De Rosa",
}
const date = "12-07-2025"
const user = (
    <div>
        <img width="200px" alt='Immagine Giuseppe' src={imgGiuseppe} />
    </div>
)

// const number = [1, 2, 3, 4, 5];
// const Numbers = ({ numbers }) => {
//     const list = numbers.map((number) => <li>{number}</li>)
//     return list
// }

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

const header = (
    // <header style={headerStyle}>
    <header>
        <div className='header-wrapper'>
            <h1>{title}</h1>
            {user}
            {/* <h2>{subtitle}</h2> */}
            <h3>{languageUsed}</h3>
            <p>Autore: {author.firstName} {author.lastName} {etàPersonale} Data Inizio Progetto: {date}</p>
            <h5>Skill List</h5>
            <div>
                <ul>
                    <li>
                        <Skills skills={skillsoperator} />
                    </li>
                </ul>
            </div>
            <Countries countries={countriesCity} />
        </div>
    </header >
)

export default header

// QUANDO CREI UN FILE DA TERMINALE ES. CON ECHO "" >>FORM.JS CAMBIARE UTF IN BASSO A DESTRA A UTF-8 INVECE DI UTF-16
