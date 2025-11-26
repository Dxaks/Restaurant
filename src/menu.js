// menu page

import { my_food_image_1 } from "./imageImport";
import { clearDOM } from "./home_page";

const myFoodImage = {
    tuwo: my_food_image_1,
    tuwoWithSource: 'https://i.ytimg.com/vi/Su79kX-iMQU/maxresdefault.jpg',
    rice: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLULYbgW5Yet2p_qm-4mO7dlMGv1WQhBIZBFBcO-JOGHyZ78vIHvMEvuNDwtj4td_Cp8&usqp=CAU',
    prideRice: 'https://i.ytimg.com/vi/k3NPaMDzRXg/maxresdefault.jpg',
    riceAndBeans: 'https://www.myactivekitchen.com/wp-content/uploads/2016/02/rice-and-beans-1-500x500.jpg',
    riceWithSource: 'https://i.ytimg.com/vi/9HC_AfydmWo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCySBm4iDjlgAGugXyubhCuO943DA',
    amala: 'https://miro.medium.com/0*LyDfZ6kSmoCgaovK.jpg',
    frideYamAndEgg: 'https://nkechiajaeroh.com/wp-content/uploads/2018/05/Nigerian-Breakfast-main-photo-1.jpg',
    teaWithFrideBread: 'https://allnigerianfoods.com/wp-content/uploads/breakfast-recipe-ideas.jpg',
    chipsAndFrideEgg: 'https://img-global.cpcdn.com/recipes/b8821784b5c49ed4/240x320cq80/photo.jpg',
    kunuDaKosai: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5EzlCwUk6s8qFyf02-wIul_kA2DENGSNLA&s',
    milkiDoughtnut: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWzKDngz5_dOEVvl99ioYYPcJBFaXjAv-ZA&s',
    meatPie: 'https://i.ytimg.com/vi/rIFjzoIxyqc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrBVAM7HLLAhGl_FcWshqC2fWcmw',
    cincin: 'https://eatwellabi.com/wp-content/uploads/2022/08/Nigerian-snack-7-720x717.jpg',
    chickenSamosa: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/07/Chicken-samosa-16-1200x675.jpg',
}

export class FoodStore {

     static #store = []

    constructor(name, description, price, id) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
    }

    static addFood(foodObject) {
        return this.#store.push(foodObject);
    }

    static get getFoodStore() {
        return FoodStore.#store;
    }
}


function addFoodToFoodStore(name, description, price, id) {
    const food = new FoodStore(name, description, price, id)
        FoodStore.addFood(food)
}

addFoodToFoodStore('name', 'whatever', 200, myFoodImage.tuwo);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.rice);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.prideRice);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.riceAndBeans);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.riceWithSource);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.tuwoWithSource);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.amala);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.frideYamAndEgg);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.teaWithFrideBread);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.chipsAndFrideEgg);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.kunuDaKosai);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.milkiDoughtnut);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.meatPie);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.cincin);
addFoodToFoodStore('name', 'whatever', 200, myFoodImage.chickenSamosa);


export function renderFoodObject(foodDetails) {

    const contentDiv = document.getElementById('content')
    clearDOM(contentDiv);

    contentDiv.className = 'content_menu';

    foodDetails.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food_card');

        const foodCardDetails = document.createElement('div');
        const foodCardImage = document.createElement('div');

        foodCard.appendChild(foodCardDetails);
        foodCard.appendChild(foodCardImage);

        const foodName = document.createElement('p');
        const foodDescription = document.createElement('p');
        const foodPrice = document.createElement('p');

        foodCardDetails.appendChild(foodName);
        foodCardDetails.appendChild(foodDescription);
        foodCardDetails.appendChild(foodPrice);

        const image = document.createElement('img');
        image.dataset.image = food.id;

        foodCardImage.appendChild(image);

        foodName.textContent = food.name;
        foodDescription.textContent = food.description;
        foodPrice.textContent = `N${food.price}`;
        image.src = food.id;

        contentDiv.appendChild(foodCard);
    });
}


console.log('hiiiiiiiiiiiiiiiiiiiiiiii')

