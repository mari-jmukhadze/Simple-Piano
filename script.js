
function play_audio(key){
   console.log(key)
   var audio = document.getElementById(key).childNodes
   audio[3].play()
}