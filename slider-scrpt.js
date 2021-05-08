let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let width = document.querySelector('.slider-line').offsetWidth;
var next = document.querySelector('.next');
var back = document.querySelector('.back');
let widhtImg = document.querySelector('.image').offsetWidth;
var returnWidth = width-widhtImg;

next.addEventListener('click' , function(){
   offset+=widhtImg;
  
   if(offset > returnWidth){
      offset=0;
   }
   sliderLine.style.left = -offset + 'px';
});

back.addEventListener('click' , function(){
    offset=offset - widhtImg;
    
    if(offset < 0){
       offset=returnWidth;
    }
    sliderLine.style.left = -offset + 'px';
 });