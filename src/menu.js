//........................ menu page....................................
import { my_food_image_1, myFoodImage } from "./imageImport";
import { clearDOM } from "./home_page";



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

addFoodToFoodStore('Tuwo', 'Staple Grains based porrage with Chicken Soup', 2500, myFoodImage.tuwo);
addFoodToFoodStore('Rice', 'Pride Rice with Source and Chicken', 2000, myFoodImage.rice);
addFoodToFoodStore('Pride Rice', 'High quality long grain variety with Source and Chicken', 3200, myFoodImage.prideRice);
addFoodToFoodStore('Rice and Beans', 'Traditional rice and beans with groundnut oil and powdered paper', 1200, myFoodImage.riceAndBeans);
addFoodToFoodStore('Rice and Source', 'Coconut Rice with Source and Turkey', 4500, myFoodImage.riceWithSource);
addFoodToFoodStore('Pounded Yam', 'Pounded Yam with Liver Source', 3000, myFoodImage.tuwoWithSource);
addFoodToFoodStore('Amala', 'Native pounded Yam back with Native soup and Turkey', 3500, myFoodImage.amala);
addFoodToFoodStore('Pride Yam', 'Pride Yam with Crushed Pride Eggs and Plantain', 2800, myFoodImage.frideYamAndEgg);
addFoodToFoodStore('Tea and Brad', 'Tea with milk and Pride bread', 2000, myFoodImage.teaWithFrideBread);
addFoodToFoodStore('Chips', 'Chips and Eggs', 2500, myFoodImage.chipsAndFrideEgg);
addFoodToFoodStore('Kunu and Beans Cake', 'Traditional warm grain Milk and Beans Cake', 1000, myFoodImage.kunuDaKosai);
addFoodToFoodStore('Doughtnut', 'Milky Doughtnut', 500, myFoodImage.milkiDoughtnut);
addFoodToFoodStore('Meat Pie', 'Meat Pie', 1500, myFoodImage.meatPie);
addFoodToFoodStore('Cin-Cin', 'Snack', 800, myFoodImage.cincin);
addFoodToFoodStore('Samosa', 'Chicken Samosa', 1900, myFoodImage.chickenSamosa);


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


