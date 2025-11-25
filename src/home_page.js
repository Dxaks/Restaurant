import { myBgImage1 } from "./imageImport";

// func. that set the background_image and text on Home page.
function renderHomePageDetails() {

        const contentDiv = document.getElementById('content');
        clearDOM(contentDiv);

        contentDiv.className = 'content_home';

        contentDiv.style.backgroundImage = `url(${myBgImage1})`;

        function addTextToDiv(div) {

            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');

            h1.textContent = 'FOOD COURNER NIG.';
            h2.textContent = 'We Make Local & Fast Food, Launch, and Event Food';
            h3.textContent = 'Add: Ahmadu Bello Memorial Stadium Gus. Nig.';

            div.appendChild(h1);
            div.appendChild(h2);
            div.appendChild(h3);
        }
   
    addTextToDiv(contentDiv)
}


function clearDOM(div) {
    div.innerHTML = '';
    if (div.style.backgroundImage) {
        div.style.backgroundImage = '';
    }
}

export {renderHomePageDetails, clearDOM}