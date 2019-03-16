$(document).ready(function(){

  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
      loop: true
  });
  
  typewriter.typeString('Welcome!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am Luis Montanez!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am a Full Stack Web Developer!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Feel free to look around...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Drop me a line for collabs!')
    .start();

}); 


