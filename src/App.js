import './styles.css';

function App() {
  return (
    <>

      <h1>Welcome</h1>
      <div className="container">
        <div id="answerPool">
          <p>PHP</p>
          <p>C++</p>
          <p>HTML</p>
          <p>React</p>
          <p>JavaScript</p>
        </div>
      <label htmlFor="blank">
        <input id="blank" type="text" />
        It Stands For Hypertext Markup Language
      </label>
      <button id="checkAnswer">Check Answer</button>
      <div id="answerMessage">The answer is ...</div>
      </div>
    </>
  );
}

export default App;
