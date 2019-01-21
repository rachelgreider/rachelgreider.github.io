console.log('hello world');

// Get the modal
// function runs when called by onclick html tag attached to all images
function openModal(modalID, imgID) {
    console.log('opening');
    console.log(`openModal(${modalID},${imgID})`);
    //read in modal
    var modal = document.getElementById(modalID);

    // Get the image and insert it inside the modal
    var img = document.getElementById(imgID);
    var modalImg = document.getElementById("img02");


    modal.style.display = "block";
    modalImg.src = img.src;



    // Get the <span> element that closes the modal
    var closebutton = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    closebutton.onclick = function () {
        modal.style.display = "none";
        return false;
    }
}

// add all image ID's to carousel array
var carouselParent = document.getElementById("carousel1");
var carouselElementArray = document.getElementsByClassName("carouselElement");

// create number of divs equal to length of array
// append to parent carousel container
// assign carousel styling classes
for (var i = 0; i < carouselContainer.length; i++) {
    var carouselElement = document.createElement('div');
    carouselElement.className = 'carouselElement';
    carouselParent.appendChild(carouselElement);
}
// read in slider buttons
// translate carousel 
function incrimentCarousel() {
    var carouselButton = document.getElementsByClassName("slideButton");
    
    
}
