console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth

	const newSection = document.createElement('section');
	newSection.setAttribute('id', 'middle-earth');
	
	// 2. use a for loop to iterate over the lands array that does the following:

	for (let i = 0; i < lands.length; i++){
		
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		let land = document.createElement('article');
	//   2b. gives each land article an `id` tag of the corresponding land name
		land.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
		
		let landH1 = document.createElement('h1');
		landH1.innerHTML = lands[i];
		land.append(landH1);

	//   2d. appends each land to the middle-earth section
		newSection.append(land);	
	}
	// 3. append the section to the body of the DOM.
	
	document.body.appendChild(newSection);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let ulHobbit = document.createElement("ul")
	// give each hobbit a class of `hobbit`
	ulHobbit.setAttribute('class', 'hobbit' )
	const the_shire = document.getElementById('The-Shire') 
	for(i = 0; i < hobbits.length; i++){

		const li = document.createElement('li');

		li.innerHTML = hobbits[i];
		ulHobbit.appendChild(li)
	}
	
	the_shire.appendChild(ulHobbit);
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
	
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	// give the div a class of `'magic-imbued-jewelry'`
	// add the ring as a child of `Frodo`

	const newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'the-ring');
	newDiv.setAttribute('class', 'magic-imbued-jewelry')
	


	newDiv.append(hobbits[0]);
	 


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	let ulMordor = document.createElement("ul")
	
	ulMordor.setAttribute('class', 'baddies' )
	const mordor = document.getElementById('Mordor') 
	for(i = 0; i < baddies.length; i++){

		const liMordor = document.createElement('li');

		liMordor.innerHTML = baddies[i];
		ulMordor.appendChild(liMordor)
	}
	
	mordor.appendChild(ulMordor);


	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	const myAside = document.createElement('aside');
	const ulBuddies = document.createElement("ul");
	
	ulBuddies.setAttribute('class', 'buddies' )
	const rivendell = document.getElementById('Rivendell') 
	for(i = 0; i < buddies.length; i++){

		const liBuddies = document.createElement('li');

		liBuddies.innerHTML = buddies[i];
		ulBuddies.appendChild(liBuddies)
	}
	
	myAside.appendChild(ulBuddies);
	rivendell.appendChild(myAside);
	
	
	
	
	
	// create an `aside` tag
	// put an `unordered list` of the `'buddies'` in the aside
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire');
	
	let ulHobbit = document.createElement("ul")
	
	ulHobbit.setAttribute('class', 'hobbit' )
	const rivendell = document.getElementById('Rivendell') 
	for(i = 0; i < hobbits.length; i++){

		const li = document.createElement('li');

		li.innerHTML = hobbits[i];
		ulHobbit.appendChild(li)
	}
	
	rivendell.appendChild(ulHobbit);
	let mylist = document.querySelector('ul, hobbit')
	mylist.innerHTML = "";
	
		
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// const myNewBud = document.querySelector('li, buddies');
	const liS = document.querySelectorAll('li, .buddies')
	const arr = Array.from(liS)
	for (const [index,liS] of arr.entries()){
  	//console.log(liS);
	}
	liS[4].innerHTML = "Aragorn"
	
	// change the `'Strider'` text to `'Aragzorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
	const fellowshipMembers = hobbits.concat(buddies);
	
	const the_FellowShip = document.createElement('div');
	the_FellowShip.setAttribute('id', 'the-fellowship');

	 fellowshipMembers.forEach(function(taco){
		 alert(taco + " has joined the fellowship!")
	 })
		 

	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const liS3 = document.querySelectorAll('aside, li')
	const arr3 = Array.from(liS3)
	for (const [index,liS3] of arr3.entries()){
    arr3[1].innerHTML='Gandalf the White';}

	arr3[1].style.background = "white";
	arr3[1].style.border = "3px solid grey";
	
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert("the horn of gondor has been blown");
	const liS4 = document.querySelectorAll('aside, li')
	const arr4 = Array.from(liS4)
	for (const [index,liS3] of arr4.entries()){
		arr4[5].remove()
	}
	
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	const liS = document.querySelectorAll('#Mordor')
    const arr4 = Array.from(liS)
    for (const [index,liS] of arr4.entries()){
        
const liS3 = document.querySelectorAll('aside,li')
const arr3 = Array.from(liS3)
for (const [index,liS3] of arr3.entries()){
 
  arr4[0].append(arr3[5]);
  arr4[0].append(arr3[6]);
}
  const mountD = document.createElement('div');
  mountD.setAttribute('id','mount-doom');
  liS.append(mountD);
}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	// const gollum = document.createElement('div');
    // gollum.setAttribute('id', 'gollum');
    // const moveRing = document.getElementById('the-ring');
    // const mD = getElementById('mount-doom');
    
    // gollum.append(moveRing);
    // mD.append(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
	// remove Gollum and the Ring from the document
	// gollum.remove();
	let ulHobbit = document.createElement("ul")
	
	ulHobbit.setAttribute('class', 'hobbit' )
	const the_shire = document.getElementById('The-Shire') 
	for(i = 0; i < hobbits.length; i++){

		const li = document.createElement('li');

		li.innerHTML = hobbits[i];
		ulHobbit.appendChild(li)
	}
	
	the_shire.appendChild(ulHobbit);
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
