interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'ISSAKA HAMA',
    lastName: 'Barhamou',
    age: 23,
    location: 'Cote Ivoire'
};

const student2: Student = {
    firstName: 'KIMBA SOULEY',
    lastName: 'Nafissa',
    age: 45,
    location: 'Niger'
};

const students: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

students.forEach(student => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const td_firstName = document.createElement('td');
    const td_location = document.createElement('td');
    td_firstName.innerHTML = `${student.firstName}`;
    td_location.innerHTML = `${student.location}`;
    tr.appendChild(td_firstName);
    tr.appendChild(td_location);
});