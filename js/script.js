
//sticky nav starts


// window.addEventListener("scroll",function()
// {
// let elm=document.getElementById("menu-bar")

//   if(window.pageYOffset>=30)
//   {
//     elm.classList.add("sticky")
//   }
//   else
//   {
//     elm.classList.remove("sticky")

//   }
// })


//sticky nav ends








//typing starts

var i = 0;
var txt = 'Enabling intelligent process and data-driven decisions.';
var speed = 55;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

  typeWriter()
 

//typing ends







