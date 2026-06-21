const API_URL = "/api/students";

export async function getStudents() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createStudent(student) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  return response.json();
}

export async function updateStudent(id, student) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  return response.json();
}

export async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}
