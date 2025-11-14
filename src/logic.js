export const testing = 'testing successfull';
import myBgImage from './images/home_background_1.jpeg';

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function ImageChanger() {
    let imageUrl = [
        'image1',
        'image2',
        'image3'
    ]

    if(randomNumber() === 1) {
        return imageUrl[0]
    } else if (randomNumber() === 2) {
        return imageUrl[1]
    } else {
        return imageUrl[2]
    }
}

function changeBackgroundImage() {
    const contentDiv = document.getElementById('content')
    contentDiv.style.backgroundImage = `url(${myBgImage})`;
    console.log(contentDiv)
}

changeBackgroundImage();


