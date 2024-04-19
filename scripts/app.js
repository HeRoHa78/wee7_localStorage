const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYearPublication = document.querySelector('.userInputYearofPublication');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
});

