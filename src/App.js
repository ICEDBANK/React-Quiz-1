// Importing useState hook from React
import { useState } from 'react';
// Importing custom CSS styles from 'styles.css' file
import './styles.css';

// Define the functional component App
function App() {
  // Define state variables for answer and message
  const [answer, setAnswer] = useState(''); // State to store the user's answer
  const [message, setMessage] = useState({ text: '', color: 'black' }); // State to store the feedback message

  // Array of draggable items
  const draggables = ['HTML', 'JavaScript', 'PHP', 'C++', 'React.js'];

  // Function to check the user's answer
  const checkAnswer = () => {
    const correctAnswer = 'html'; // Correct answer
    if (answer.toLowerCase() === correctAnswer) {
      setMessage({ text: 'Your Answer Is Correct', color: 'green' }); // Display correct message
    } else {
      setMessage({ text: 'Try Again', color: 'red' }); // Display try again message
    }
  };

  // Event handler for drag start
  const onDragStart = (e, value) => {
    e.dataTransfer.setData('text/plain', value); // Set data to be dragged
  };

  // Event handler for drag over
  const onDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior
  };

  // Event handler for drop
  const onDrop = (e) => {
    e.preventDefault(); // Prevent default behavior
    const droppedText = e.dataTransfer.getData('text/plain'); // Get dropped text
    setAnswer(droppedText); // Set the answer state with the dropped text
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    setAnswer(e.target.value); // Set the answer state with the input value
  };

  // JSX markup
  return (
    <>
      {/* Heading */}
      <h1>Welcome</h1>
      {/* Main container */}
      <div className="container">
        {/* Answer pool */}
        <div id="answerPool">
          {draggables.map((item, index) => (
            <p
              key={index}
              className="draggable"
              draggable="true"
              onDragStart={(event) => onDragStart(event, item)}
            >
              {item}
            </p>
          ))}
        </div>
        {/* Answer input */}
        <label htmlFor="blank">
          <input
            id="blank"
            type="text"
            value={answer}
            onChange={handleInputChange}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
          It Stands For Hypertext Markup Language
        </label>
        {/* Button to check answer */}
        <button id="checkAnswer" onClick={checkAnswer}>
          Check Answer
        </button>
        {/* Message display */}
        <div
          id="answerMessage"
          style={{
            display: message.text ? 'block' : 'none',
            color: message.color,
          }}
        >
          {message.text}
        </div>
      </div>
    </>
  );
}

// Export the App component
export default App;
