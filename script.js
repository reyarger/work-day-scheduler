// appending date onto the webpage

var x = new Date();

var output = x.getDate() 

var currentDate=document.getElementById("currentDay");
currentDate.textContent=output;
currentDate.append(output);

// allowing user input to be stored to local storage 


// event listener for when the calendar button is clicked, it saves the entry to local storage 

// figure out how to change the background color once time has passed

