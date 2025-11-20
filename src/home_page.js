import { myBgImage1 } from "./imageImport";


function addText() {
    const contentDiv = document.getElementById('content');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');

    h1.textContent = 'FOOD COURNER NIG.';
    h2.textContent = 'We Make Local & Fast Food, Launch, and Event Food';
    h3.textContent = 'Add: Ahmadu Bello Memorial Stadium Gus. Nig.';
    contentDiv.appendChild(h1);
    contentDiv.appendChild(h2);
    contentDiv.appendChild(h3);
}

// func. that change the bg_image after the event is triggered
export function changeBackgroundImageOnHover() {

        const contentDiv = document.getElementById('content')
        contentDiv.classList.add('content_home')
        
        contentDiv.style.backgroundImage = `url(${myBgImage1})`;
   
    addText();
}




