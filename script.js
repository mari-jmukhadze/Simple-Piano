
function play_audio(key){
   console.log(key)
   var audio = document.getElementById(key).childNodes
   audio[3].play()
}

function get_value(){
   var val = document.getElementById('keys').value;
   var notes = val.split(',')

   var i = 0
   var fun = function () {
      play_audio(notes[i]);
      i++
      if (i < notes.length) {
         window.setTimeout(fun, 500)
      }
   }
   fun()
}
