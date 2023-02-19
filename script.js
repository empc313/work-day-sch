
var currentDay = document.getElementById("#currentDay");
var container = document.getElementById("#container");
var hourNine = document.getElementById("#hour-9");
var saveBtn = document.getElementById(".saveBtn")
var timeBlock = document.getElementById(".time-block");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(".container-fluid px-5").wrapAll("<div class='container'/>");

// Code to display the current date in the header of the page.
var date = new Date();
console.log(date);
$("#currentDay").append(($var = date));
 

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



 // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time
  //$(".hour-9").append('present');
  function tracker(){
    //current time
    //run through each time block
    $(".text-center").each(function (){
      var timeNow = parseInt($(this).attr("id"));

      //add and remove classes based off of if time is less than now
      if ( timeBlock < timeNow){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      //Add and remove class based on if the time is equal to now
      else if (timeBlock === timeNow){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      }
      //Add or remove class if time is not now or less than now
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    })
  }



  // TODO: Add code to get any user input that was saved in localStorage and set

var timeNow;
var eventText;
  $(".saveBtn").click(function(){
  eventText = $(this).siblings(".description").val();
  console.log(eventText);
  localStorage.setItem(timeNow, JSON.stringify(eventText));

})

//function saveText (){
//  var saveEvent9 = JSON.parse(localStorage.getItem("9AM"));
 // $("#9").val("");
////  $("#9").val(saveEvent9);


$(function () {});


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


