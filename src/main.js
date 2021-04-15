import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import './js/gameManager.js'
import './js/charObj.js'

$(document).ready(function () {
  // let myGame = new Manager()
  let myTeam = []
  $( "#guardian" ).click(function() {
    myTeam.push("guardian")
  });
  $( "#mage" ).click(function() {
    myTeam.push("mage")
  });
  $( "#swindler" ).click(function() {
    myTeam.push("swindler")
  });
  $( "#archer" ).click(function() {
    myTeam.push("archer")
  });
  
});

$("section").text("TEST TEXT INPUT")
