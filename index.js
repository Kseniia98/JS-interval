const image = document.querySelector('#image');

const arr = [
  'image/f1.jpg', 
  'image/f2.jpg', 
  'image/f3.jpg'
]

let count = 0;

setInterval(() => {
  if(count >= arr.length){
    count = 0;
  }

  image.innerHTML = `<img src="${arr[count]}">`;
  count++;

}, 5000)