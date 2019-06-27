// var submit = $('.submit')
// submit.on("click", formHandler)
//
// function formHandler(event){
//   event.preventDefault()
//   console.log('hi')
//   addUser(event)
//   addImages(event)
//   addLinks(event)
// }
//
// var usernames = JSON.parse(localStorage.getItem("usernames"))||[]
//
// function addUser(event) {
//   event.preventDefault()
//   usernames.push($('.username').val())
//   console.log(usernames)
//   localStorage.setItem('usernames', JSON.stringify(usernames))
//   console.log(localStorage)
//
//   var retrieved = JSON.parse(localStorage.getItem("usernames"))
//   console.log(retrieved)
// }
//
// var images = JSON.parse(localStorage.getItem("images"))||[]
//
// function addImages(event){
//   event.preventDefault()
//   images.push($('.images').val())
//   console.log(images)
//   localStorage.setItem('images', JSON.stringify(images))
//   console.log(localStorage)
//
//   var returnedImages = JSON.parse(localStorage.getItem("images"))
//   console.log(returnedImages)
// }
//
// var links = JSON.parse(localStorage.getItem("links"))||[]
//
// function addLinks(event){
//   event.preventDefault()
//   links.push($('.links').val())
//   console.log(links)
//   localStorage.setItem('links', JSON.stringify(links))
//   console.log(localStorage)
//
//   var returnedLinks = JSON.parse(localStorage.getItem("links"))
//   console.log(returnedLinks)
// }
//
//
// function addDiv(){
//   var insertSpace = $('.insertSpace')
//   var retrieved = JSON.parse(localStorage.getItem("usernames"))
//   console.log(retrieved)
//   var returnedImages = JSON.parse(localStorage.getItem("images"))
//   var returnedLinks = JSON.parse(localStorage.getItem("links"))
//   for (i=0; i<retrieved.length; i++){
//   insertSpace.append(`
//     <div>
//       <h2> ${retrieved[i]} </h2>
//       <h6> <a href=${returnedLinks}>${returnedLinks}</a> </h6>
//       <p> ${returnedImages[i]} </p>
//     </div>
//     `)}
// }
// addDiv()


var submit = $('.submit')
submit.on("click", formHandler)

function formHandler(event){
  event.preventDefault()
  console.log('hi')
  addUser(event)
  addImages(event)
  addLinks(event)
}

var usernames = JSON.parse(localStorage.getItem("usernames"))||[]

function addUser(event) {
  //event.preventDefault()
  usernames.push($('.username').val())
  //console.log(usernames)
  localStorage.setItem('usernames', JSON.stringify(usernames))
  //console.log(localStorage)

  var retrieved = JSON.parse(localStorage.getItem("usernames"))
  //console.log(retrieved)
}

var images = JSON.parse(localStorage.getItem("images"))||[]

function addImages(event){
  //event.preventDefault()
  images.push($('.images').val())
  //console.log(images)
  localStorage.setItem('images', JSON.stringify(images))
  //console.log(localStorage)

  var returnedImages = JSON.parse(localStorage.getItem("images"))
  //console.log(returnedImages)
}

var links = JSON.parse(localStorage.getItem("links"))||[]

function addLinks(event){
  //event.preventDefault()
  links.push($('.links').val())
  //console.log(links)
  localStorage.setItem('links', JSON.stringify(links))
  //console.log(localStorage)

  var returnedLinks = JSON.parse(localStorage.getItem("links"))
  //console.log(returnedLinks)
}


function addDiv(){
  var insertSpace = $('.insertSpace')
  var retrieved = JSON.parse(localStorage.getItem("usernames"))
  console.log(retrieved)
  var returnedImages = JSON.parse(localStorage.getItem("images"))
  var returnedLinks = JSON.parse(localStorage.getItem("links"))
  for (i=0; i<retrieved.length; i++){
  insertSpace.append(`
    <div>
      <h2> ${retrieved[i]} </h2>
      <h6> <a href=${returnedLinks[i]}>${returnedLinks[i]}</a> </h6>
      <p> ${returnedImages[i]} </p>
    </div>
    <div class="slideshow-container">


  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="${returnedImages[i][0]}" style="width:100%">
    <div class="text">Caption MKDIR</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="${returnedImages[i][1]}" style="width:100%">
    <div class="text">Caption MKDIR</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="${returnedImages[i][2]}" style="width:100%">
    <div class="text">Caption MKDIR</div>
  </div>


  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>


<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
    `)}
}
addDiv();


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  for (k = 0; k < dots.length; k++) {
      dots[k].className = dots[k].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//<a href="https://maresaamador.wix.com/mhaportfolio">https://maresaamador.wixsite.com/mhaportfolio</a>
