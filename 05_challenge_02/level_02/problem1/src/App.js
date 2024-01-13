import logo from './logo.svg';
import './App.css';
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'

const style={
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 2.5,
  
}
const heading=(
  <div>
  <h1>Frontend Technologies</h1>
  <img src={html} alt='asabeneh image' />
  <img src={css} alt='asabeneh image' />
  <img src={js} alt='asabeneh image' />
  <img src={react} alt='asabeneh image' />
  </div>
)
function App() {
  return (
    <div>
    {heading}
    
  </div>
  );
}

export default App;
