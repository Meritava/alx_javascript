#!/usr/bin/node
function welcomeMessage(fullName) {
    return function() {
      alert("Welcome " + fullName);
    };
  }
  
  // Create closures with different full names
  var guillaume = welcomeMessage("Guillaume");
  var alex = welcomeMessage("Alex");
  var fred = welcomeMessage("Fred");