const BASE_URL = "localhost:3000"

function fetchStudents(){
    return fetch(`http://${BASE_URL}/students`)
    .then(res => res.json())
}

function addStudent() {
    const options = {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },

    }
    return fetch('http://${BASE_URL}/students', options) .then(res => res.json())
}

export function deleteStudent (id) {
 const options = {
     method: "DELETE", 
     headers: { 
        "Content-type": "application/json; charset=UTF+8"
     },
     }
    return fetch('http://${BASE_URL}/students /${id}', options) .then(res => res.json())
}

export function updateStudent(id, valueToUpdate) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(newStudent), 
        headers: { 
           "Content-type": "application/json; charset=UTF+8"
        },
}
