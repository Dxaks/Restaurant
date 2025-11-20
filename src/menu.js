// menu page

export class Restaurant {

     static #store = []

    constructor(name, description, price, id) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
    }

    static addFood(food_Obj) {
        return this.#store.push(food_Obj);
    }

    static get foodStore() {
        return Restaurant.#store;
    }
}


function addFoodToRestaurant(name, description, price, id) {
    const food = new Restaurant(name, description, price, id)
        Restaurant.addFood(food)
}

addFoodToRestaurant('name', 'whatever', 200, 'image_url');
addFoodToRestaurant('name', 'whatever', 200, 'image_url');
addFoodToRestaurant('name', 'whatever', 200, 'image_url');
addFoodToRestaurant('name', 'whatever', 200, 'image_url');
addFoodToRestaurant('name', 'whatever', 200, 'image_url');
addFoodToRestaurant('name', 'whatever', 200, 'image_url');


export function displayFood(food_details) {

    const contentDiv = document.getElementById('content')
    contentDiv.classList.add('content_menu')

    food_details.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food_card');

        const food_card_details = document.createElement('div');
        const food_card_image = document.createElement('div');

        foodCard.appendChild(food_card_details);
        foodCard.appendChild(food_card_image);

        const food_name = document.createElement('p');
        const food_description = document.createElement('p');
        const food_price = document.createElement('p');

        food_card_details.appendChild(food_name);
        food_card_details.appendChild(food_description);
        food_card_details.appendChild(food_price);

        const image = document.createElement('img');

        food_card_image.appendChild(image);

        food_name.textContent = food.name;
        food_description.textContent = food.description;
        food_price.textContent = food.price;

        contentDiv.appendChild(foodCard);
    });
}







