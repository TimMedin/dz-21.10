// 1. Реалізуйте функцію для отримання списку всіх студентів (HTTP GET /students)
// 2. Реалізуйте функцію для додавання нового студента (HTTP POST /students)
// 3. Реалізуйте функцію для оновлення інформації про студента (HTTP PUT /students/{id})
// 4. Реалізуйте функцію для часткового оновлення студента (HTTP PATCH /students/{id})
// 5. Реалізуйте функцію для видалення студента за його ідентифікатором (HTTP DELETE /students/{id})
// 6. Створити HTML-сторінку з необхідними елементами, такими як кнопки, текстові поля та таблицю для відображення студентів.

// 7. Написати JavaScript-код для обробки подій користувача.
// 7.1. Додати обробники подій для кнопок, щоб вони виконували відповідні HTTP-запити.
// 7.2. При натисканні на кнопку "Отримати студентів" (GET), виконати HTTP-запит GET /students і відобразити отримані дані в таблиці.
// 7.3. Реалізувати форму для додавання нового студента. При натисканні на кнопку "Додати студента" (POST), зібрати дані з полів вводу, сформувати об'єкт з даними  і виконати HTTP-запит POST /students, щоб додати нового студента до бази даних.
// 7.4. Реалізувати можливість оновлення інформації про студента. Для кожного студента в таблиці додати кнопку "Оновити". При натисканні на цю кнопку, виконати HTTP-запит PUT /students/:id, де :id — ідентифікатор фільму, і відправити оновлені дані про студента на сервер.
// 7.5. Додати можливість видалення студента. Для кожного студента в таблиці додати кнопку "Видалити". При натисканні на цю кнопку, виконати HTTP-запит DELETE /students/:id.

const BASE_URL = 'http://localhost:3000';

export async function fetchStudents() {
    const response = await fetch(`${BASE_URL}/students`);
    return response.json();
}

export async function addStudent(newStudent) {
    const options = {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const response = await fetch(`${BASE_URL}/students`, options);
    return response.json();
}

export async function deleteStudent(id) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const response = await fetch(`${BASE_URL}/students/${id}`, options);
    return response.json();
}

export async function updateStudent(id, valueToUpdate) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(valueToUpdate),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const response = await fetch(`${BASE_URL}/students/${id}`, options);
    return response.json();
}

import { fetchStudents, addStudent, deleteStudent, updateStudent } from './api-server';


const getStudentsBtn = document.querySelector('.get-students-btn');
console.log(fetchStudents, addStudent, deleteStudent, updateStudent);
        name: formEl.name.value,
        age: formEl.age.value,
        course: formEl.course.value,
        skills: [formEl.skills.value],
        email: formEl.email.value,
        isEnrolled: formEl.isEnrolled.checked 
    };
    addStudent(newStudent).then(() => console.log("Студента додано"));
    e.currentTarget.reset();
}

function onGetStudentsBtn() {
    fetchStudents().then(studentsArr => {
        const studentMarkUp = studentListMarkUp(studentsArr);
        studentList.innerHTML = studentMarkUp;
    });
}

function studentListMarkUp(arrOfStudents) {
    return arrOfStudents.map(student => {
        return `
            <li>
                <h1>Ім'я:${student.name}</h1>
                <p>Вік:${student.age}</p>
                <p>Курс:${student.course}</p>
                <p>${student.skills}</p>
                <p>email:${student.email}</p>
                <p>Зараховано:${student.isEnrolled}</p>
                <button>Видалити студента</button>
                <button>Оновити студента</button>
            </li>
        `;
    }).join('');
}
