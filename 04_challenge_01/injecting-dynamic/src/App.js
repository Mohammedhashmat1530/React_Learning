import logo from './logo.svg';
import './App.css';

function App() {
  const dynamicString = "Hello, React!";
  const dynamicNumber = 42;
  const dynamicBoolean = true;
  const dynamicArray = [4, 8, 3, 98];
  const dynamicObject = { name: 'John', age: 25,uvv:'vyt' };

  return (
    <div>
      {/* String */}
      <p>{dynamicString}</p>

      {/* Number */}
      <p>{dynamicNumber}</p>

      {/* Boolean */}
      <p>{dynamicBoolean ? 'It is true!' : 'It is false!'}</p>

      {/* Array */}
      <ul>
        {dynamicArray.map((item, index) => (
          <li> {item}</li>
        ))}
      </ul>

      {/* Object */}
      <p>Name: {dynamicObject.name}, Age: {dynamicObject.age} hgv:{dynamicObject.uvv}</p>
    </div>
  );
};

export default App;