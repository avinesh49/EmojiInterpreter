import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "Winking",
  "😘": "Blowing a kiss",
  "😂": "Tears of joy",
  "🤣": "Rolling on the floor laughing",
  "😴": "Sleeping",
  "🙄": "Face with rolling eyes",
  "🤩": "Star-struck",
  "😠": "Angry",
  "😕": "Confused",
  "😲": "Astonished",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat face",
  "🐶": "Dog face",
  "🦁": "Lion",
  "🐯": "Tiger face",
  "🐴": "Horse face",
  "🐮": "Cow face",
  "🐷": "Pig face",
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍑": "Peach",
  "🍒": "Cherries"
};

const emojiList = Object.keys(emojiDictionary);
const emojiStyle = {
  fontSize: "1.5rem",
  padding: "0.5rem",
  cursor: "pointer"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emoji = event.target.value;
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "This emoji is not there in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Do you know what I mean?</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emoji's we know</h3>
      <div>
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={emojiStyle}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
