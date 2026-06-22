import { useEffect, useState } from "react";

function RegistrationPage() {

  const [students, setStudents] = useState([]);
  const [exams, setExams] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const [studentId, setStudentId] = useState("");
  const [examId, setExamId] = useState("");

  async function loadData() {

    const studentsResponse =
      await fetch("/api/students");

    const examsResponse =
      await fetch("/api/exams");

    const registrationsResponse =
      await fetch("/api/registrations");

    setStudents(await studentsResponse.json());
    setExams(await examsResponse.json());
    setRegistrations(await registrationsResponse.json());
  }

  useEffect(() => {
    loadData();
  }, []);

  async function register() {

    await fetch("/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentId,
        examId
      })
    });

    loadData();
  }

  return (
    <>
      <h2>Exam Registration</h2>

      <select
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      >
        <option value="">Select Student</option>

        {students.map(student => (
          <option
            key={student.studentId}
            value={student.studentId}
          >
            {student.firstName} {student.lastName}
          </option>
        ))}
      </select>

      <select
        value={examId}
        onChange={(e) => setExamId(e.target.value)}
      >
        <option value="">Select Exam</option>

        {exams.map(exam => (
          <option
            key={exam.examId}
            value={exam.examId}
          >
            {exam.examName}
          </option>
        ))}
      </select>

      <button onClick={register}>
        Register
      </button>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Exam</th>
          </tr>
        </thead>

        <tbody>

          {registrations.map(reg => (
            <tr key={reg.registrationId}>
              <td>{reg.registrationId}</td>
              <td>
                {reg.student.firstName}
              </td>
              <td>
                {reg.exam.examName}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  );
}

export default RegistrationPage;
