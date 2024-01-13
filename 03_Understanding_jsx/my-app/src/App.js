import logo from './logo.svg';
import './App.css';

const name="hash"

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style={headerStyles}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)

const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>{name}</li>
    </ul>
  </main>
)

// JSX element, footer
const footer = (
  <footer style={headerStyles}>
    <p>Copyright 2020</p>
  </footer>
)

const footer2 = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

const footer3 = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)



function App() {
  return (
    <div>
    {header}
    {main}
    {footer}
    {footer2}
    {footer3}
  </div>
  )
}

export default App;
