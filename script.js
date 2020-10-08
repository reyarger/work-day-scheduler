// appending date onto the webpage

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// console.log(moment);
// updating background color based on time
// var t = new Date().getHours();
// console.log(t);
// if (t < 10) {
//     document.textarea.style.present;
// } else {
//     document.body.style.backgroundColor="grey";
// }
// retrieving user response from window object 


// var storedTodos = JSON.parse(localStorage.getItem("todos"));
// event listener for when the calendar button is clicked, it saves the entry to local storage 
  $(document).ready(function() {
    

      $("#b1").on("click", function(event) {
          var user1= ($("#t1").val());
          JSON.stringify(user1);
          localStorage.setItem("task1", user1);
          var t = new Date().getHours();
          if (t == parseInt(time1)) {
          document.textarea.style.present;
           } else if(t < time1) {
          document.body.style.backgroundColor.past;
           }
           else {
          document.body.style.backgroundColor.future;
           }
      });
      $("#b2").on("click", function(event) {
        var user2= ($("#t2").val());
        JSON.stringify(user2);
        localStorage.setItem("task2", user2);
       });
       $("#b3").on("click", function() {
        var user3= ($("#t3").val());
        JSON.stringify(user3);
        localStorage.setItem("task3", user3);
       });
       $("#b4").on("click", function() {
        var user1= ($("#t4").val());
        JSON.stringify(user4);
        localStorage.setItem("task4", user4);
       });
       $("#b5").on("click", function() {
        var user5= ($("#t5").val());
        JSON.stringify(user5);
        localStorage.setItem("task5", user5);
       });
       $("#b6").on("click", function() {
        var user6= ($("#t6").val());
        JSON.stringify(user6);
        localStorage.setItem("task6", user6);
       });
       $("#b7").on("click", function() {
        var user7= ($("#t7").val());
        JSON.stringify(user7);
        localStorage.setItem("task7", user7);
       });
       $("#b8").on("click", function() {
        var user8= ($("#t8").val());
        JSON.stringify(user8);
        localStorage.setItem("task8", user8);
       });
       $("#b9").on("click", function() {
        var user9= ($("#t9").val());
        JSON.stringify(user9);
        localStorage.setItem("task9", user9);
       });
     
       console.log(localStorage);
    //    window.onload = function() {
        $("#t1").val(localStorage.getItem("task1"));
        $("#t2").val(localStorage.getItem("task2"));
        $("#t3").val(localStorage.getItem("task3"));
        $("#t4").val(localStorage.getItem("task4"));
        $("#t5").val(localStorage.getItem("task5"));
        $("#t6").val(localStorage.getItem("task6"));
        $("#t7").val(localStorage.getItem("task7"));
        $("#t8").val(localStorage.getItem("task8"));
        $("#t9").val(localStorage.getItem("task9"));

        
        // $("#t1").innerHTML = localStorage.getItem("task1");

    //     // localStorage.getItem("task1");

    //      }

    });


    
// figure out how to change the background color once time has passed

