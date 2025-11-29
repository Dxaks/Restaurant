import './style.css';
import './menu.css';
import './about.css';

import { renderHomePageDetails, addSvg, firstRender } from './home_page';
import { renderFoodObject } from './menu';
import { FoodStore } from './menu';
import { Employee, renderEmployee } from './about';
import { renderDialogForm, formSubmit } from './about';


const renderSiteDisplay = () => {

    const navBar = document.querySelectorAll('button');

    navBar.forEach((button) => {
        button.addEventListener('click', (e) => {
        e.preventDefault;

            if(e.target === navBar[0]) {
                renderHomePageDetails()
                  
            } else if(e.target === navBar[1]) {
                renderFoodObject(FoodStore.getFoodStore)
            } else {
                renderEmployee(Employee.getEmployees);
                renderDialogForm()
                formSubmit()
            }
        })
    })  
}

firstRender();
renderSiteDisplay();

