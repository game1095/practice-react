import { useState } from "react";
import "./AddForm.css";

export default function Addform(props) {
  // props student from app.js
  const { students, setStudent } = props;
  // state สำหรับเก็บข้อมุล student
  const [stuName, setName] = useState("");
  // state สำหรับเก็บข้อมุล gender
  const [gender, setGender] = useState("Boy");

  function saveStudent(e) {
    e.preventDefault();
    if (!stuName) {
      alert("input name");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: stuName,
        gender: gender,
      };
      setStudent([...students, newStudent]);
      setName("");
      setGender("Boy")
    }
  }

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student name</label>
        <input
          type="text"
          name="stuName"
          value={stuName}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Boy">Boy</option>
          <option value="Girl">Girl</option>
        </select>
        <button type="submit" className="btn-add">
          Save
        </button>
      </form>
    </section>
  );
}
