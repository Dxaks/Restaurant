// menu page

import { my_food_image_1 } from "./imageImport";
import { clearDOM } from "./home_page";

const my_food_imges = {
    tuwo: my_food_image_1,
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

addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);
addFoodToFoodStore('name', 'whatever', 200, my_food_imges.tuwo);


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

