var currentDay = document.getElementById("#currentDay");
var container = document.getElementById("#container");
var saveBtn = document.getElementById(".saveBtn");
var timeBlock = document.getElementById(".time-block");
var hour = document.getElementById(".hour");

var hourNine = document.getElementById("#hour-9");
var hourTen = document.getElementById("#hour-10");
var hourEle = document.getElementById("#hour-11");
var hourTwe = document.getElementById("#hour-12");
var hourOne = document.getElementById("#hour-13");
var hourTwo = document.getElementById("#hour-14");
var hourThree = document.getElementById("#hour-15");
var hourFour = document.getElementById("#hour-16");
var hourFive = document.querySelector("#hour-17");
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

var currentTime =
  date.getHours();
console.log(currentTime);


var currentTime = dayjs().hour();
//.each functionally


  //current time
  //run through each time block
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"));

    //add and remove classes based off of if time is less than now
    if (currentTime < timeBlock) {
      $(this).addClass(".past");
      $(this).removeClass(".future");
      $(this).removeClass(".present");
    }
    //Add and remove class based on if the time is equal to now
    else if (currentTime === timeBlock) {
      $(this).addClass(".present");
      $(this).removeClass(".future");
      $(this).removeClass(".past");
    }
    //Add or remove class if time is not now or less than now
    else {
      $(this).addClass(".future");
      $(this).removeClass(".present");
      $(this).removeClass(".past");
    }
  });

  function initPage() {
    $("#hour-9 .description").val(localStorage.getItem("9AM"));
  };
    
// TODO: Add code to get any user input that was saved in localStorage and set
var saveBtn = document.querySelector(".saveBtn");
var textblock = document.querySelector(".time-block");

 


var eventText;
$(".saveBtn").click(function () {
 var currentTime = $(this).siblings(".description").val();
 console.log(currentTime);
 localStorage.setItem(currentTime, JSON.stringify(eventText));
});


$(".saveBtn").click(function initPage() {
  var currentTime = $(this).siblings(".hour").text();
var localPlan = $(this).siblings(".description").val();
localStorage.setItem
});
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
