
import { useState } from 'react'
import './App.css'

function App() {

  const [itemValue , setitemValue] = useState("");
  return (
    <>
      <form action="">
        <div>
        <label htmlFor="inputValue">Enter Name of the</label>
        <input type="text" id='inputValue' value={itemValue} onChange={e => setitemValue(e.target.value)}></input>
        </div>
          <button type="submit" id='button'>
            Click Me
          </button>
      </form>
      <h2>Items you have added</h2>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button id='button1' type='submit'>Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button id='button1' type='submit'>Delete</button>
        </li>
      </ul>
        
    </>
  )
}

export default App
