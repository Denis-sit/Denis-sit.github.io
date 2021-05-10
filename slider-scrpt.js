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


 var imgButton = document.querySelectorAll('.preview');
 console.log(imgButton);
 for(let i=0; i<=imgButton.length-1;i++){
 imgButton[i].addEventListener('click', function(evt){
   evt.preventDefault();
    offset = imgButton[i].dataset.pixel;
    let offsetNum = Number(offset);
    sliderLine.style.left=-offsetNum + 'px';
  
 });
}