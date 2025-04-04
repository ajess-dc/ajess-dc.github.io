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
for (let i = 1; i <= imgFileArray.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute(`src`, `images/${imgFileArray[i]}`);
    newImage.setAttribute(`alt`, imgAltText[i]);
    thumbBar.appendChild(newImage);
}
    newImage.addEventListener("click", (event)=> {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    });


/* Wiring up the Darken/Lighten button */

