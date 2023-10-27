let slideShow = [];
slideShow = [
    './images/chess_news_1.png',
    './images/chess_news_2.png',
    './images/chess_news_3.png',
    './images/chess_news_4.png'
]

showImageInCarrousel = () => {
    const slideShowCarrousel = document.querySelector('.slideshow_carrousel');

    for (let image in slideShow) {
        const carrouselImage = document.createElement('img');
        carrouselImage.src = slideShow[image];
        carrouselImage.addEventListener('click', console.log('image clicked'));
        slideShowCarrousel.appendChild(carrouselImage)
    }
}

showImageInCarrousel();