var previousBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var img = document.getElementById("img");

var indx = 1;
function fnext() {
    if (indx < 12)
        indx++;
    img.src = "./img/" + indx + ".jpg";
}

function fprevious() {
    if (indx > 1)
        indx--;
    img.src= "./img/" + indx + ".jpg";
}

function changeimg(){
     document.getElementById("image1").src= "./BMW/1.jfif";
     document.getElementById("image2").src= "./BMW/2.jpg";
     document.getElementById("image3").src= "./BMW/3.jpg";
     document.getElementById("image4").src= "./BMW/4.jpg";
     document.getElementById("image5").src= "./BMW/5.jpg";
     document.getElementById("image6").src= "./BMW/6.jpg";
    new WOW().init();

}
function changeimg1(){
    document.getElementById("image1").src= "./tesla/1.jpg";
    document.getElementById("image2").src= "./tesla/2.jpg";
    document.getElementById("image3").src= "./tesla/3.jpg";
    document.getElementById("image4").src= "./tesla/4.jpg";
    document.getElementById("image5").src= "./tesla/5.jpeg";
    document.getElementById("image6").src= "./tesla/6.jpg";
   new WOW().init();

}
function changeimg2(){
    document.getElementById("image1").src= "./Ferrari/1.jpg";
    document.getElementById("image2").src= "./Ferrari/2.jfif";
    document.getElementById("image3").src= "./Ferrari/3.jpg";
    document.getElementById("image4").src= "./Ferrari/4.jpg";
    document.getElementById("image5").src= "./Ferrari/5.jpg";
    document.getElementById("image6").src= "./Ferrari/6.jpg";
   new WOW().init();

}
function changeimg3(){
    document.getElementById("image1").src= "./Lamborghini/1.jpg";
    document.getElementById("image2").src= "./Lamborghini/2.jpg";
    document.getElementById("image3").src= "./Lamborghini/3.jpg";
    document.getElementById("image4").src= "./Lamborghini/4.jpg";
    document.getElementById("image5").src= "./Lamborghini/5.jpg";
    document.getElementById("image6").src= "./Lamborghini/6.jpg";
   new WOW().init();

}
previousBtn.addEventListener('click', fprevious)
nextBtn.addEventListener('click', fnext)
