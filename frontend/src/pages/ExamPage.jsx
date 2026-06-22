import { useEffect, useState } from "react";

import {
  getExams,
  createExam
} from "../services/examService";

function ExamPage() {

  const [exams, setExams] = useState([]);

  const [formData, setFormData] = useState({
    examName: "",
    examDate: "",
    totalMarks: ""
  });

  async function loadExams() {
    const data = await getExams();
    setExams(data);
  }

  useEffect(() => {
    loadExams();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await createExam(formData);

    setFormData({
      examName: "",
      examDate: "",
      totalMarks: ""
    });

    loadExams();
  }

  return (
    <>
      <h2>Exam Management</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Exam Name"
          value={formData.examName}
          onChange={(e) =>
            setFormData({
              ...formData,
              examName: e.target.value
            })
          }
        />

        <input
          type="date"
          value={formData.examDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              examDate: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={formData.totalMarks}
          onChange={(e) =>
            setFormData({
              ...formData,
              totalMarks: e.target.value
            })
          }
        />

        <button type="submit">
          Save
        </button>

      </form>

      <hr />

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Exam</th>
            <th>Date</th>
            <th>Total Marks</th>
          </tr>
        </thead>

        <tbody>

          {exams.map(exam => (
            <tr key={exam.examId}>
              <td>{exam.examId}</td>
              <td>{exam.examName}</td>
              <td>{exam.examDate}</td>
              <td>{exam.totalMarks}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </>
  );
}

export default ExamPage;
