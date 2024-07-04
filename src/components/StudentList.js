import { useState } from "react";

function StudentList() {
  // สร้าง state Students
  const [students, setStudent] = useState([
    { id: 1, name: "Taweesak Intaratat" },
    { id: 2, name: "John Terry" },
    { id: 3, name: "Frank Lampard" },
    { id: 4, name: "Luke Shaw" }
  ]);
  // สร้าง state สร้างหรือซ่อนข้อมูล student
  const [show, setShow] = useState(true);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h1>Array State</h1>
      <p>จำนวนนักเรียน : {students.length} คน</p>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show && students.map((item) => (
            <div key={item.id}>
              <p>{item.id} - {item.name}</p>
              <button onClick={() => deleteStudent(item.id)}>Remove</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default StudentList;
