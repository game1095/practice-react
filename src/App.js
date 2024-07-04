import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

function App() {
  // สร้าง state count
  const [count, setCount] = useState(0);

  // สร้าง function เพิ่มค่า
  function addCount() {
    setCount(count + 1);
  }

  // สร้าง function ลดค่า
  function removeCount() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main>
          <StudentList />
        </main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={addCount}>Increase</button>
        <button onClick={removeCount}>Decrement</button>
        {/* with arrow function */}
        <button onClick={() => setCount(0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;
