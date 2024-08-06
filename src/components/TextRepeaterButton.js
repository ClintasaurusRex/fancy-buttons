import { useState } from 'react';



function TextRepeaterButton() {

  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>)
  }

  return (
    <button className="TextRepeaterButton">
      I like this text
    </button>
  );
}
// key{i} is a special prop in react used for efficiently rendering lists of elements. i is the variable representing the current index in a loop

export default TextRepeaterButton;