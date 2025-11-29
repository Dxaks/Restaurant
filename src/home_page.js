// ..........................Home_page....................................
import { myBgImage1, svgObject } from "./imageImport";

function renderHomePageDetails() {

        const contentDiv = document.getElementById('content');
        clearDOM(contentDiv);

        contentDiv.className = 'content_home';

        contentDiv.style.backgroundImage = `url(${myBgImage1})`;

            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');

            h1.textContent = 'FOOD COURNER NIG.';
            h2.textContent = 'We Make Local & Fast Food, Launch, and Event Food';
            h3.textContent = 'Add: Ahmadu Bello Memorial Stadium Gus. Nig.';

            contentDiv.appendChild(h1);
            contentDiv.appendChild(h2);
            contentDiv.appendChild(h3);
            
            addSvg('.content_home', 'div')    
}
   

function clearDOM(div) {
    div.innerHTML = '';
    if (div.style.backgroundImage) {
        div.style.backgroundImage = '';
    }
}

function addSvg(containerPosition, containerName) {

    const position = document.querySelector(containerPosition);
    const element = document.createElement(containerName);

    for (let image in svgObject) {
        element.innerHTML += svgObject[image];
    }
    position.appendChild(element);
}

function firstRender() {
    document.addEventListener('DOMContentLoaded', () => {
        renderHomePageDetails();
        addSvg('body', 'footer');
    })
}


export { renderHomePageDetails, clearDOM, addSvg, firstRender }