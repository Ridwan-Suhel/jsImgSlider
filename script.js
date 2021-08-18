let images = ["images/slider-1.jpg","images/slider-2.jpg","images/slider-3.jpg"]
let imagesPlaceAt = document.querySelector(".sliderImg");


let count = 0;


// next alider
function next(){
    count++;

    if(count >= images.length){
        count = 0;
        imagesPlaceAt.src = images[count];
    }else{
        imagesPlaceAt.src = images[count];
    }

    
}

// prev alider
function prev(){

    count--;

    if(count < 0){
        count = images.length -1;
        imagesPlaceAt.src = images[count];
    }else{
        imagesPlaceAt.src = images[count];
    }

}