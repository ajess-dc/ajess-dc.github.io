const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileArray = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]
/* Declaring the alternative text for each image file */
const imgAltText =["Photo of a light blue eye","Abstract dusty grey waves", "Purple and white flowers", "Egyptian wall mural depicting Anubis","Moth on a green leaf"]

/* Looping through images */
/* used MDN sources for looping: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration */
for (const image of imgFileArray) {}
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/$[image]`);
    newImage.setAttribute('alt', imgAltText[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event)=> {
        const imgSource = event.target.getAttribute(`src`);
        const imgAlt = event.target.getAttribute(`alt`);
        displayedImage.setAttribute(`src`, `${imgSource}`);
        displayedImage.setAttribute(`src`,`${imgAlt}`)

    });


/* Wiring up the Darken/Lighten button */
