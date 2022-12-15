import './App.css';
import React from 'react';
import { useState } from 'react'
import sound1 from './sounds/tom_1.mp3';
import sound2 from './sounds/tom_2.mp3';
import sound3 from './sounds/tom_3.mp3';
import sound4 from './sounds/sounds_crash.mp3';
import sound5 from './sounds/sounds_snare.mp3';

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio(sound1);
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio(sound2);
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio(sound3);
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio(sound3);
      tom4.play();
      break;

    case "j":
      var snare = new Audio(sound5)
      snare.play();
      break;

    case "k":
      var crash = new Audio(sound4);
      crash.play();
      break;

    case "l":
      var kick = new Audio(sound5);
      kick.play();
      break;

    default: console.log(key);

  }
}

function App() {

  const [value, setValue] = useState("");
  console.log(value);
  makeSound(value)

  return (
    <div className="App">
      <h1 id="title">The Drum Kit</h1>
      <div className="set">
        <button onClick={() => setValue("w")} className="w drum">w</button>
        <button className="a drum" onClick={() => setValue("a")}>a</button>
        <button className="s drum" onClick={() => setValue("s")}>s</button>
        <button className="d drum" onClick={() => setValue("d")}>d</button>
        <button className="j drum" onClick={() => setValue("j")}>j</button>
        <button className="k drum" onClick={() => setValue("k")}>k</button>
        <button className="l drum" onClick={() => setValue("l")}>l</button>
      </div>
    </div>
  );
}

export default App;
