console.log('hello world');

// var currentIndex = 0;
// var carousel;
// var carouselWannabes;
// window.onload = function () {
//     addCarouselElements();
// };

// Get the modal
// function runs when called by onclick html tag attached to all images
function openModal(modalID, imgID, imgNum) {
    console.log('opening');
    console.log(`openModal(${modalID},${imgID}, ${imgNum})`);
    //read in modal
    var modal = document.getElementById(modalID);

    // Get the image and insert it inside the modal
    //var img = document.getElementById(imgID);
    //var modalImg = document.getElementById("img01");

    // use imgNum to set the current index of the carousel
    //currentIndex = imgNum-1;
    //flip to that index
    //incrementCarousel(`carousel1`, 2);

    modal.style.display = "block";
    //modalImg.src = img.src;
    modalImg.src = getElementById(`${imgID}`);



    // Get the <span> element that closes the modal
    var closebutton = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    closebutton.onclick = function () {
        modal.style.display = "none";
        return false;
    }
}

// function addCarouselElements() {
//     console.log("addCarouselElements()");
//     // add all image ID's to carousel array

//     carousel = document.getElementById("carousel1");
//     console.log(`carousel var?  ` + carousel);
//     carouselWannabes = document.getElementsByClassName("inCarousel");


//     // create number of divs equal to length of array
//     // append to parent carousel container
//     // assign carousel styling classes
//     var imageNum = carouselWannabes.length;
//     console.log(`Number of Images:  ${imageNum}`)
//     for (var i = 0; i < imageNum; i++) {
//         console.log(`carouselWannabes[i].innerHTML:   ` + carouselWannabes[i].innerHTML)
//         var newCarouselElement = `<div class="carouselElement">${carouselWannabes[i].innerHTML} </div>`;
//         console.log(`to add innerHTML:  ` + newCarouselElement);
//         carousel.innerHTML += newCarouselElement;
//     }
// }


// // read in slider buttons
// // translate carousel 
// function incrementCarousel(carouselID, direction) {
//     console.log(`Incrementing Carousel (${carouselID})`);

//     var carousel = document.getElementById(`${carouselID}`);
//     var carouselButton = document.getElementsByClassName("slideButton");

//     console.log(`   carousel.style.left:  ` + carousel.style.left);
//     console.log(`   currentIndex:  ` + currentIndex);
//     carouselWannabes = document.getElementsByClassName("carouselElement");

//     // translate 
//     //if trying to move right and is not equal to the number of images
//     if (direction === 1 && currentIndex != carouselWannabes.length - 1) {
//         currentIndex += 1;
//         console.log(currentIndex * (-75));
//         carousel.style.left = `${currentIndex * (-75)}vw`;
//     } else if (direction === 0 && currentIndex != 0) {
//         currentIndex -= 1;
//         console.log(currentIndex * (-75));
//         carousel.style.left = `${currentIndex * (-75)}vw`;
//     } else if (direction === 2) {
//         carousel.style.left = `${currentIndex * (-75)}vw`;
//     } else console.log("    failed");
// }