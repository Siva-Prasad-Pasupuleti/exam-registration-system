import { useEffect, useState } from "react";

function ResultPage() {

  const [results, setResults] = useState([]);

  async function loadResults() {

    const response =
      await fetch("/api/results");

    setResults(await response.json());
  }

  useEffect(() => {
    loadResults();
  }, []);

  return (
    <>
      <h2>Results</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Student</th>
            <th>Exam</th>
            <th>Marks</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {results.map(result => (
            <tr key={result.resultId}>
              <td>{result.student.firstName}</td>
              <td>{result.exam.examName}</td>
              <td>{result.marks}</td>
              <td>{result.status}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </>
  );
}

export default ResultPage;
