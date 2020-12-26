import './App.css';
import { useState } from 'react';
import literes from './litteres';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");


  const changeName = (nameInput) => {
    setName(nameInput);
    let numberInput = 0;

    for (let i = 0; i < nameInput.length; i++) {
      numberInput += literes.find(value => value.litere === nameInput[i].toLowerCase())?.number || 0;
    }

    setNumber(numberInput);
  }

  return (
    <div className="App">
      <label htmlFor="name" className="name">
        <p className="nametext">
          Введите имя:
        </p>
        <input
          type="text"
          id="name"
          onChange={e => { changeName(e.target.value) }}
        />
      </label>

      <p className="numberName">
        Число имени: {number}
      </p>
      <div className="code">
        {name.split('').map((value, index, array) => {
          const numberInput = literes.find(alphabet => alphabet.litere === value.toLowerCase())?.number || 0;
          if (!numberInput) return;
          return (<p className="codeNumber" key={Math.random()}>
              {value} - {numberInput}
            </p>)
        })}
      </div>
    </div>
  );
}

export default App;
