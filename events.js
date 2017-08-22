console.log("linked to events.js");

// Defining the ouput target by its id
var output = document.getElementById('output-target');

//When any section is clicked the output target text should be "You clicked on the {text of the section} section"
document.body.addEventListener('click', function(event){
  if(event.target.className === 'article-section'){
    console.log("yaaa!", event.target.innerHTML);
    output.innerHTML = `<p>You clicked on the ${event.target.innerHTML} section</p>`;
  }
})
//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

//Defining the header target
var pageHeader = document.getElementById('page-title')

pageHeader.addEventListener('mouseover', function(event){
  if(event.target.id === 'page-title'){
    console.log("whooohooo, nice move!");
    output.innerHTML = `<p>You moved your mouse over the header</p>`;
  }
})

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageHeader.addEventListener('mouseleave', function(event){
  if(event.target.id === 'page-title'){
    console.log("Byeeee!");
    output.innerHTML = `<p>You left me!</p>`;
  }
})

//When you type characters into the input field, the output element should mirror the text in the input field.


var textInput = document.getElementById('keypress-input');

textInput.addEventListener('keyup', function(event){
	//console.log("event", event.key);
  	//console.log(textInput.value);
  	 // output.innerHTML = textInput.value;
  	var txt = textInput.value;
  	console.log(txt);
    output.innerHTML = txt;
})
//When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var pig = document.getElementById('guinea-pig');

//Defining color change target by its id
var addColor = document.getElementById('add-color');

//addColor.addEventListener("click", function(){
    //document.body.style.color = "blue";
    addColor.addEventListener('click', function(event){
    console.log('Blue Piggy!');	
    pig.setAttribute('class', 'color');
});
    

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

var makeLarge = document.getElementById('make-large')

makeLarge.addEventListener('click', function(event){
  //if(event.target.id === 'make-large'){
    console.log("Hulk Smash!");
    pig.setAttribute('class', 'large');
    //pig.innerHTML = ;
});

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.

var addBorder = document.getElementById('add-border')

addBorder.addEventListener('click', function(event){
  //if(event.target.id === 'add-border'){
    console.log("In the border!");
    pig.setAttribute('class', 'border');
    //pig.innerHTML = ;
});

//When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var addRounding = document.getElementById('add-rounding')

addRounding.addEventListener('click', function(event){
  //if(event.target.id === 'add-rounding'){
    console.log("Go-round!");
    pig.setAttribute('class', 'rounded');
    //pig.innerHTML = ;  
});

//The first section's text should be bold.


//The last section's text should be bold and italicized.

//Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


