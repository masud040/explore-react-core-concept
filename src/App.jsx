import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button Clicked");
  }
  const handleClick2 = () => {
    alert("button 2 is Clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concept</h3>
      <Friends />
      <Users />
      <Team />
      <Counter />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("Third Click");
        }}
      >
        Third
      </button>
      <button onClick={() => addToFive(5)}>AddToFive</button>
    </>
  );
}

export default App;
