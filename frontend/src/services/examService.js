const API_URL = "/api/exams";

export async function getExams() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createExam(exam) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(exam)
  });

  return response.json();
}

export async function updateExam(id, exam) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(exam)
  });

  return response.json();
}

export async function deleteExam(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}
