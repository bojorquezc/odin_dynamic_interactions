let slideShow = [];
slideShow = [
    './images/chess_gallery_1.webp',
    './images/chess_gallery_2.webp',
    './images/chess_gallery_3.webp',
    './images/chess_gallery_4.webp',
    './images/chess_gallery_5.webp',
    './images/chess_gallery_6.webp',
    './images/chess_gallery_7.webp',
    './images/chess_gallery_8.webp',
]

const slideShowSection = {
    carrousel: document.querySelector('.slideshow_carrousel_images'),
    display: document.querySelector('.slideshow_display'),
    leftArrow: document.querySelector('.left_arrow'),
    leftArrowIndex: 0,
    rightArrow: document.querySelector('.right_arrow'),
    rightArrowIndex: 0,
}

// Load the first image in the slideshow section when the page loads
firstLoadImageSlideShow = () => {
    slideShowSection.display.replaceChildren();
    const slideShowImage = document.createElement('img');
    slideShowImage.src = slideShow[0];
    slideShowSection.display.append(slideShowImage);
}

// Load the first 4 images in the carrousel section when the page loads
firstLoadImageCarrousel = () => {
    for (let index = 0; index <= 3; index+=1) {
        const carrouselImage = document.createElement('img');
        carrouselImage.src = slideShow[index];
        carrouselImage.dataset.arrayIndex = index;
        carrouselImage.addEventListener('click', showImageInSlideshow);
        slideShowSection.carrousel.appendChild(carrouselImage);
    }
    // Load navigation arrows with data on the images in the carrousel
    slideShowSection.leftArrowIndex = 0;
    slideShowSection.rightArrowIndex = 3;
    slideShowSection.leftArrow.dataset.arrayIndex = slideShowSection.leftArrowIndex;
    slideShowSection.rightArrow.dataset.arrayIndex = slideShowSection.rightArrowIndex;
}

// Load the image clicked in the main slideshow section
showImageInSlideshow = (e) => {
    const index = e.target.dataset.arrayIndex;
    if (slideShow[index] !== undefined) {
        slideShowSection.display.replaceChildren();
        const slideShowImage = document.createElement('img');
        slideShowImage.src = slideShow[index];
        slideShowSection.display.append(slideShowImage);
    }
}

advanceImageCarrousel = (e) => {
    const lastImageIndex = parseInt(e.target.dataset.arrayIndex);
    const newFirstImageIndex = lastImageIndex - 2;
    const newLastImageIndex = lastImageIndex + 1;
    if (slideShow[newLastImageIndex] !== undefined) {
        slideShowSection.carrousel.replaceChildren();
        for (let index = newFirstImageIndex; index <= newLastImageIndex; index += 1) {
            const carrouselImage = document.createElement('img');
            carrouselImage.src = slideShow[index];
            carrouselImage.dataset.arrayIndex = index;
            carrouselImage.addEventListener('click', showImageInSlideshow);
            slideShowSection.carrousel.appendChild(carrouselImage);
        }
        slideShowSection.leftArrow.dataset.arrayIndex = newFirstImageIndex;
        slideShowSection.rightArrow.dataset.arrayIndex = newLastImageIndex;
    }
}

regressImageCarrousel = (e) => {
    const lastImageIndex = parseInt(e.target.dataset.arrayIndex);
    const newFirstImageIndex = lastImageIndex - 1;
    const newLastImageIndex = lastImageIndex + 2;
    if (slideShow[newFirstImageIndex] !== undefined) {
        slideShowSection.carrousel.replaceChildren();
        for (let index = newFirstImageIndex; index <= newLastImageIndex; index += 1) {
            const carrouselImage = document.createElement('img');
            carrouselImage.src = slideShow[index];
            carrouselImage.dataset.arrayIndex = index;
            carrouselImage.addEventListener('click', showImageInSlideshow);
            slideShowSection.carrousel.appendChild(carrouselImage);
        }
        slideShowSection.leftArrow.dataset.arrayIndex = newFirstImageIndex;
        slideShowSection.rightArrow.dataset.arrayIndex = newLastImageIndex;
    }
}

slideShowSection.leftArrow.addEventListener('click', regressImageCarrousel);
slideShowSection.rightArrow.addEventListener('click', advanceImageCarrousel);

firstLoadImageCarrousel();
firstLoadImageSlideShow();