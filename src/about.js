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
            const employeeImage = document.createElement('div');

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

     const contactUs = document.createElement('div');
            contactUs.classList.add('contact_us');
            const contactUsBtn = document.createElement('button')
            contactUsBtn.classList.add('contactBtn');
            contactUsBtn.textContent = 'Contact Us';
            contactUs.appendChild(contactUsBtn)

        contentDiv.appendChild(contactUs);
}

// ..........................contact_form................................//

export function renderDialogForm() {
    const dialogbox = document.createElement('dialog');

    const formElement = document.createElement('form');
    formElement.setAttribute('formmethod', 'dialog')
    const formHeader = document.createElement('legend');
    formHeader.textContent = 'Contact Us';
    formElement.appendChild(formHeader);

    const formLabel = ['Name', 'Email', 'Contact', 'Message' ];

    for (let i = 0; i < formLabel.length; i++) {

        const labelField = document.createElement('label');
        labelField.setAttribute('for', `${formLabel[i]}`);
        labelField.textContent = formLabel[i];

        let inputField;

        if(formLabel[i] === 'Message') {
            inputField = document.createElement('textarea');
            inputField.setAttribute('id', `${formLabel[i]}`);
        } else {
            inputField = document.createElement('input');
            inputField.setAttribute('id', `${formLabel[i]}`);
            inputField.setAttribute('type', 'text');
        }

        formElement.appendChild(labelField);
        formElement.appendChild(inputField);

    };

    const submit = document.createElement('button');
    submit.className = 'submit';
    submit.textContent = 'Submit';
    submit.setAttribute('type', 'button');
    formElement.appendChild(submit);
    dialogbox.appendChild(formElement);
    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(dialogbox);
};

export function formSubmit() {
    const dialogbox = document.querySelector('dialog');
    console.log(dialogbox)
    const contactBtn = document.querySelector('.contactBtn');
    console.log(contactBtn)

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.textContent === 'Contact Us') {
            dialogbox.showModal();
        }
    })

    const close = document.querySelector('.submit');
    close.addEventListener('click', (e) => {
        e.preventDefault;
        if (e.target.textContent === 'Submit') {
            dialogbox.close();
        }
    })
}