$(document).ready(function(){

var textArr = ['Web Developer', 'Fitness Enthusiast', 'Photographer', 'Self Learner', 'Web Developer', 'Fitness Enthusiast', 'Photographer', 'Self Learner' ]
var index = 0;
setInterval(function(){        
$("#changeText").animate({
opacity:0
},function()
{
   if(textArr.length > index) {
   $(this).text(textArr[index]).animate({opacity:1})
   index++; 
   }
   else
   index = 0;
});
},2000);


var $grid = $('.grid').masonry({
   itemSelector: '.grid-item',
   percentPosition: true,
   columnWidth: '.grid-sizer'
 });
 // layout Masonry after each image loads
 $grid.imagesLoaded().progress( function() {
   $grid.masonry();
 });  

});
