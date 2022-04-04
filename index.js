const image = document.querySelector('#image');

const arr = [
  'image/f1.jpg', 
  'image/f2.jpg', 
  'image/f3.jpg'
]

let count = 0;
image.innerHTML = `<img src="${arr[count]}">`;
let interval;

function startSlideshow(){

  interval = setInterval(() => {
    if(count >= arr.length){
      count = 0;
    }

    image.innerHTML = `<img src="${arr[count]}">`;
    count++;
  
  }, 1000)
}

const startSlide = document.getElementById('startSlide');
startSlide.addEventListener('click', startSlideshow);

/////////////////

function stopSlideshow(){
  clearInterval(interval)
}

const stopSlide = document.getElementById('stopSlide');
stopSlide.addEventListener('click', stopSlideshow);

/////////////////

const nextSlide = document.getElementById('nextSlide');

function nextSlideshow(){
  if(count >= arr.length){
    count = 0;
  }
  image.innerHTML = `<img src="${arr[count]}">`;
  count++;
}
nextSlide.addEventListener('click', nextSlideshow);

////////////////

const previousSlide = document.getElementById('previousSlide');

function previousSlideshow(){
  if(count < 0 ){
    count = arr.length - 1;
  }
  image.innerHTML = `<img src="${arr[count]}">`;
  count--;
}

previousSlide.addEventListener('click', previousSlideshow);


