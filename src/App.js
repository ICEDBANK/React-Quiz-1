import { useState } from 'react';
import './styles.css';

function App() {

  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState({text: '', color:"black"});

  const draggables = ["HTML" , "JavaScript" , "PHP", "C++", "React.js"];

  const checkAnswer = () => {

    const correctAnswer = "html";

      if(answer.toLowerCase() === correctAnswer){

        setMessage({text:"Your Answer Is Correct", color: "green"});

      } else {

        setMessage({text: "Try Again", color: "Red"})

      }

  };

  const onDragStart = (e, value) => {

    e.dataTransfer.setData('text/plain', value);

  };

  const onDragOver = (e) => {

    e.preventDefault();

  }

  const onDrop = (e) => {

    e.preventDefault();
    const answer = e.dataTransfer.getData('text/plain');
    setAnswer(answer);

  }

  return (
    <>

      <h1>Welcome</h1>
      <div className="container">
        <div id="answerPool" >
          {draggables.map((item, index) => (
          <p
            key={index}
            className='draggable'
            draggable = "true"
            onDragStart={(event) => onDragStart(event, item)}
          >{item}</p>
          ))}
        </div>
      <label
      htmlFor="blank"
      onDragOver = {onDragOver}
      onDrop = {onDrop}
      >
        <input id="blank" type="text" />
        It Stands For Hypertext Markup Language
      </label>
      <button id="checkAnswer" onClick={checkAnswer}>Check Answer</button>
      <div id="answerMessage" style={{ display: message.text ? 'block' : 'none', color: message.color }}>{message.text}</div>
      </div>
    </>
  );
}

export default App;
