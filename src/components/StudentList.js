import "./StudentList.css";
import Item from "./Item";
import { useState } from "react";

function StudentList(pros) {

  // สร้าง state สร้างหรือซ่อนข้อมูล student
  const [show, setShow] = useState(true);
  const {students,deleteStudent} = pros
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน : {students.length} คน</h1>
          <button onClick={() => setShow(!show)}>
            {show? "Hide":"Show"}
          </button>
        </div>
        {show && students.map((data) => (
            <Item key = {data.id} data={data} deleteStudent={deleteStudent}/> 
          ))}
      </ul>
    </>
  );
}

export default StudentList;
