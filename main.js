// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () =>{
  const errorBar = document.querySelector("#modal")
  errorBar.setAttribute('class',"hidden")
  //hide error
  const clickHeart = heart => {
    mimicServerCall()
    .then(response => {
      if(response){
        const heartStatus = heart.target
        if (heartStatus.innerHTML === EMPTY_HEART) {
          heartStatus.innerHTML = FULL_HEART
          heartStatus.className = "activated-heart"
          
        } else{
          heartStatus.innerHTML = EMPTY_HEART
          heartStatus.className = "like-glyph"
        }
      }})
    .then(data => console.log(data))
    .catch(() =>{
    //update DOM kay
    errorBar.className =""
    
    setTimeout(() => errorBar.className = "hidden", 5000)
   
    })}
 
  })

  clickHeart(mimicServerCall)
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
