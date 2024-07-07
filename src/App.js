import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Addform from "./components/AddForm"; 

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

  // สร้าง state Students
  const [students, setStudent] = useState([]);

  function deleteStudent(id) {
    setStudent(students.filter((data) => data.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Home" />
        <main>
          <Addform students={students} setStudent={setStudent}/>
          <StudentList students={students} deleteStudent={deleteStudent} />
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
