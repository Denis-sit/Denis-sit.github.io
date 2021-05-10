let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let width = document.querySelector('.slider-line').offsetWidth;
let next = document.querySelector('.next');
let back = document.querySelector('.back');
let widhtImg = document.querySelector('.image').offsetWidth;
let returnWidth = width-widhtImg;

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


 let imgButton = document.querySelectorAll('.preview');
 console.log(imgButton);
 for(let i=0; i<=imgButton.length-1;i++){
 imgButton[i].addEventListener('click', function(evt){
   evt.preventDefault();
    offset = imgButton[i].dataset.pixel;
    let offsetNum = Number(offset);
    sliderLine.style.left=-offsetNum + 'px';
  
 });
}