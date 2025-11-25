// ...........................about page.....................
import { clearDOM } from "./home_page";

export class Employee {
    
    static #employeeData = []

    constructor(name, rank, contact, id) {
        this.name = name;
        this.rank = rank;
        this.contact = contact;
        this.id = id;
    }

    static addEmployee(employee) {
        return this.#employeeData.push(employee)
    }

    static get getEmployees() {
        return this.#employeeData;
    }

}

function createEmployee(name, rank, contact, id) {
    const employee = new Employee(name, rank, contact, id);
    Employee.addEmployee(employee);
}

createEmployee('Zaks', 'Line Manager', '09031127787', 'image_url')
createEmployee('Zaks', 'Line Manager', '09031127787', 'image_url')
createEmployee('Zaks', 'Line Manager', '09031127787', 'image_url')

export function renderEmployee(employees) {
    const contentDiv = document.getElementById('content');
    clearDOM(contentDiv);

    contentDiv.className = 'employees';

        employees.forEach(employee => {
            const card = document.createElement('div');
            card.classList.add('employee_details');

            const employeeCard = document.createElement('div');
            const employeeImage = document.createElement('div')

            card.appendChild(employeeCard);
            card.appendChild(employeeImage);
            
            const employeeName = document.createElement('p');
            const employeeRank = document.createElement('p');
            const employeeContact = document.createElement('p');

            const image = document.createElement('img');

            employeeCard.appendChild(employeeName);
            employeeCard.appendChild(employeeRank); 
            employeeCard.appendChild(employeeContact);

            employeeImage.appendChild(image);

            employeeName.textContent = employee.name;
            employeeRank.textContent = employee.rank;
            employeeContact.textContent = employee.contact;

            contentDiv.appendChild(card);

    });
}