const slider = document.querySelector('.gallery__cont');
let isDown = false;
let startX;
let sLeft;
slider.scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 

function menuClick() {
    $('.slide-nav').slideToggle();
}

$(document).mouseup(function(e) 
{
    var container = $(".mobile-view");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.slide-nav').slideToggle();
    }
});

AOS.init({ 
  disable: function() {
    var maxWidth = 779;
    return window.innerWidth < maxWidth;
  }
}); 