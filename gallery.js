let slideShow = [];
slideShow = [
    './images/chess_news_1.png',
    './images/chess_news_2.png',
    './images/chess_news_3.png',
    './images/chess_news_4.png'
]

const slideShowSection = {
    carrousel: document.querySelector('.slideshow_carrousel'),
    display: document.querySelector('.slideshow_display'),
}

showImageInSlideshow = (e) => {
    const index = e.target.dataset.arrayIndex;
    if (slideShow[index] !== undefined) {
        slideShowSection.display.replaceChildren();
        const slideShowImage = document.createElement('img');
        slideShowImage.src = slideShow[index];
        slideShowSection.display.append(slideShowImage);
    }
}

showImageInCarrousel = () => {
    for (let image in slideShow) {
        const carrouselImage = document.createElement('img');
        carrouselImage.src = slideShow[image];
        carrouselImage.dataset.arrayIndex = image;
        carrouselImage.addEventListener('click', showImageInSlideshow);
        slideShowSection.carrousel.appendChild(carrouselImage);
    }
}

showImageInCarrousel();