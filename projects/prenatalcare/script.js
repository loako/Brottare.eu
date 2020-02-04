if (document.readyState != 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
  //document.getElementById('topNav').addEventListener('click', scrollFunc);
}

/*function scrollFunc(e) {

		console.log( e.target.text)
    
      var targetPos;
      switch (e.target.text) {
        case 'Projects':
          console.log("PROJEKT")
				  targetPos = 'top';
          break;
  
        case 'About me':
          targetPos = 'varNar';
          break;
  
        case 'Contact':
          targetPos = 'ovrigt';
          break;


  
      var x = document.getElementById("topNav");
      if(x.className === "topnav responsive"){
        x.className = "topnav";
        
      }
      if(window.innerHeight> window.innerWidth){
        if (e.target.text === 'Välkomna') {
          $('html, body').animate({
            scrollTop: $('#' + targetPos).offset().top - 1000
          }, 850);
        } else {
          $('html, body').animate({
            scrollTop: $('#' + targetPos).offset().top -95
          }, 850);
        }
      }
  
      else{
      if (e.target.text === 'Projects') {
        $('html, body').animate({
          scrollTop: $('#' + targetPos).offset().top - 1000
        }, 850);
      } else {
        $('html, body').animate({
          scrollTop: $('#' + targetPos).offset().top -73
        }, 850);
      }
    }
    }
  }

*/
function Scroll(event) {

  var targetPos;
  switch (event.target.text.trim()) {
    case 'Projects':

      targetPos = '#projects';
      break;

    case 'About me':
      targetPos = '#about';
      break;

    case 'Contact':
      return false;
      break;
  }


  $('html, body').animate({
    scrollTop: $(targetPos).offset().top - 100
  }, 850);
  if ($("#navbarToggler").is((':visible'))) {
    $('.navbar-toggler').click();
  }

  return false;
}

