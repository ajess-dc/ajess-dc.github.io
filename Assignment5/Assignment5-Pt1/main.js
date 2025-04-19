// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

const transcript = document.querySelector(`.transcript`);
const transcriptButton = document.querySelector(`.transcript-button`);
const transcriptCon = document.querySelector(`.transcript-container`);

transcript.onclick = () => {
  if(transcriptButton.textContent === 'Show Transcript') {
    transcript.style.display = "block";
    transcript.style.display = 'Hide Transcript';
  } else {
    transcript.style.display = "none";
    transcriptButton.textContent = 'Show transcript';
  }
}

const nav = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".hamburgerIcon")
const navMenu = document.querySelector("nav ul")
navMenu.className = "hidden";

hamburgerIcon.onclick = () => {
  if(navMenu.className === "Hidden") {
    navMenu.style.visibility = "visibile";
    navMenu.className ="visible";
  } else if (navMenu.className === "visible"){
    navMenu.style.visibility ="hidden";
    navMenu.className = "hidden";
  }
}