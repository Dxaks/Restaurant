import './style.css';
import './menu.css';
import './about.css';

import { renderHomePageDetails, addSvg } from './home_page';
import { renderFoodObject } from './menu';
import { FoodStore } from './menu';
import { Employee, renderEmployee } from './about';


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
            }
        })
    })  
}

renderSiteDisplay();

