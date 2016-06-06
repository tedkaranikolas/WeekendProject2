//https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json
// x --- You first task is to make an AJAX call from the client side app.js, using the .ajax method and access the json data.
//x --- When successful, it should bring the data down.

// x --- What I would like to see on the DOM, is one person at a time represented -
// the info for the first person in the json data.
// One the screen should also be Prev and Next buttons, that when pressed, show the information for the appropriate person.
// These should wrap - prev when on the first person should wrap around to show the last person and vice versa.
// Also on the dom should be a display showing the number of people and which is being currently viewed (eg. 2/20)
// When a person is displayed, show their name, their city, and their piece of shoutout feedback.


// console.log("jscript working");
// $(document).ready(function(){
//   console.log("jquery working");
// });
var studentDir;
var index = 0;

$(document).ready(function(){

  $.ajax({
    url: "https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json",
    dataType: "json",
    success: function( data ){
        studentDir = data;
        console.log("data received");
        console.log(data);
        studentList();
      },  // End success
        statusCode: {
           404: function(){
              alert( 'error connecting to server' );
           }  // End 404
         } // End statusCode
       }); // End ajax

//console.log(studentDir);

var studentList = function newStudent (){
    $('#students').html("<p>First Name: " +
    studentDir.students[index].first_name + "</p>" + " <p>Last Name: " +
    studentDir.students[index].last_name + "</p>" + "<p>City: " +
    studentDir.students[index].city + "</p>" + "<p>Shoutout: " +
    studentDir.students[index].shoutout + " <p>Student Number: " + index + "/20" + "</p>");};

// var nextStudent = document.createElement('button');
// nextStudent.textContent('Next Student');
// nextStudent.className('next');
//
// var prevStudent = document.createElement('button');
// prevStudent.textContent('Previous Student');
// nextStudent.className('previous')

    $('#nextStudent').on("click", function(){
      console.log("button is working");
      if (index <= 0) index = 0;
      $(this).next();
      index ++;
      studentList();
      });


        // $(".students").next().text(students.first_name);
        $('#previousStudent').on("click", function(){
          if (index >=19) index = 19;
          $(this).next();
          index --;
          studentList();

        });
    });
// $('#nextButton').on("click", function(){
// if (index >= 0) index = 0; // Prevent infinite clicks
// $(this).next(); // Next Student
// index++; // Adding to index
// studentList();
//   });
// });
//
// //(for var i = 0; i < studentDir.length); i++)
// //console.log(studentDir);
//
// // $('#prevStudent').on(click, function(){
// //
// // });
// //
// // $('#nextStudent').on(click,function(){
// //
// // });
