var myobject = {
  

  
  holaName: function(name) {
    var result = "Bienvenido " + name;
    var getDiv = document.getElementById('eldiv');
    getDiv.innerHTML = result;
  },
  
  createForm: function() {
    
    var form = document.createElement("form");
    var label = document.createElement("label");
    var userName = document.createElement("input");
    var labelText = document.createTextNode("Name");
    var sendText = document.createTextNode('Send');
    var btn = document.createElement('button');
    label.appendChild(labelText);
    btn.appendChild(sendText);
    form.appendChild(label);
    form.appendChild(userName);
    form.appendChild(btn);
    
    userName.id = 'elnombre';
    userName.type = 'text';
    btn.id = 'elboton';
    btn.type = 'button';
    var getDiv = document.getElementById('eldiv');
    getDiv.innerHTML = "";
    getDiv.appendChild(form);
    
    btn.onclick= function() {
      handlers.sendName();
    }
  }
};
/*
var elboton = document.getElementById('elboton');
elboton.addEventListener('click', handlers.sendName()); */

// 2 problems: 
/* 1st: if the addEventListener is left inside myobject 
   event of addEventListener seems executed at creation 
   This is solved when left outside */
// 2nd: When left outside, nothing happens at click, except button disappears
// Uncaught TypeError: Cannot read property 'addEventListener' of null

//OK solved but new problem.
// now button click doesnt do anything. No error message in the console.

//I include a text attritube for input -- did not solve it.

// tried now placing the lines into myObject. This takes us back to the old problem
// that is, console logs "Bienvenido" at creation of form.

//MAGIC, THE SOLUTION WAS to wrap the onclick event in an anonymous function.
// found out here https://stackoverflow.com/questions/95731/why-does-an-onclick-property-set-with-setattribute-fail-to-work-in-ie
//I should read that whole thread.


var handlers = {
  sendName: function() {
    var name = document.getElementById('elnombre');
    myobject.holaName(name.value);
  }
  
}