import { useEffect, useState } from "react";

import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from "../services/studentService";

function StudentPage() {

  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  async function loadStudents() {
    const data = await getStudents();
    setStudents(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleSubmit(e) {

    e.preventDefault();

    if (editingId) {

      await updateStudent(
        editingId,
        form
      );

    } else {

      await createStudent(form);

    }

    setEditingId(null);
    setForm(emptyForm);

    loadStudents();
  }

  async function handleDelete(id) {

    if (!window.confirm(
      "Delete student?"
    )) {
      return;
    }

    await deleteStudent(id);

    loadStudents();
  }

  function handleEdit(student) {

    setEditingId(
      student.studentId
    );

    setForm({
      firstName:
        student.firstName,

      lastName:
        student.lastName,

      email:
        student.email,

      phone:
        student.phone
    });
  }

  return (
    <>
      <h2 className="mb-4">
        Student Management
      </h2>

      <form
        className="card p-3 mb-4"
        onSubmit={handleSubmit}
      >

        <input
          className="form-control mb-2"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) =>
            setForm({
              ...form,
              firstName:
                e.target.value
            })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) =>
            setForm({
              ...form,
              lastName:
                e.target.value
            })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email:
                e.target.value
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone:
                e.target.value
            })
          }
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          {editingId
            ? "Update Student"
            : "Add Student"}
        </button>

      </form>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {students.map(student => (

            <tr
              key={student.studentId}
            >

              <td>
                {student.studentId}
              </td>

              <td>
                {student.firstName}
              </td>

              <td>
                {student.lastName}
              </td>

              <td>
                {student.email}
              </td>

              <td>
                {student.phone}
              </td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    handleEdit(student)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    handleDelete(
                      student.studentId
                    )
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </>
  );
}

export default StudentPage;
