const numOne = 2
const numTwo = 3
const techs = ["HTML", "CSS", "JavaScript"]
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

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

export default main

// QUANDO CREI UN FILE DA TERMINALE ES. CON ECHO "" >>FORM.JS CAMBIARE UTF IN BASSO A DESTRA A UTF-8 INVECE DI UTF-16
