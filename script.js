
function play_audio(key){
   console.log(key)
   var audio = document.getElementById(key).childNodes
   audio[3].play()
}

function get_value(){
   var val = document.getElementById('keys').value;
   var notes = val.split(',')
   // notes.push
   for (let i = 0; i < notes.length; i++){
      play_audio(notes[i])
   }
}