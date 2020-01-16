/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
	'Students',
	'Faculty',
	"What's New",
	'Tech Trends',
	'Music',
	'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
// define new elements
function createMenu(menuItems) {
	const menuList = document.createElement('div');
	const ulList = document.createElement('ul');

    // set text content, define new element, append
    // setup structure of elements
	menuItems.forEach(item => {
		let listItem = document.createElement('li');
		listItem.textContent = item;
		ulList.appendChild(listItem);
	});

  // setup structure of elements
	menuList.appendChild(ulList);
// set class names
	menuList.classList.add('menu');

	// click event, toggles class menu open, click event to open menu
	const menuButton = document.querySelector('.menu-button');
	menuButton.addEventListener('click', () => {
		menuList.classList.toggle('menu--open');
  });
  
	return menuList;
}
 // setup structure of elements
const header = document.querySelector('.header');
menuItems.forEach(item => {
	header.appendChild(createMenu(menuItems));
});


	// function showHiddenNav() {
	// 	const menuButton = document.getElementById('menu--open');
	// 	if (menuButton.className == 'menu-open') {
	// 		menuButton.setAttribute('class', 'menu');
	// 	} else {
	// 		menuButton.setAttribute('class', 'menu--open');
	// 	}
	// }

	// document.getElementById('menuButton').addEventListener('click', showHiddenNav);

// function createArticles(title, date, firstParagraph, secondParagraph,
// 	thirdParagraph) {
// 	// define new elements
// 	const article = document.createElement('div');
// 	const articleTitle = document.createElement('h2');
// 	const articleDate = document.createElement('p');
// 	const articlePar1 = document.createElement('p');
// 	const articlePar2 = document.createElement('p');
// 	const articlePar3 = document.createElement('p');
// 	const articleExpBtn = document.createElement('span');

// article.appendChild(articleTitle);
// 	article.appendChild(articleDate);
// 	article.appendChild(articlePar1);
// 	article.appendChild(articlePar2);
// 	article.appendChild(articlePar3);
// 	article.appendChild(articleExpBtn);

// const menuBtn = document.querySelector('.menu-button');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if(!menuOpen) {
//   menuBtn.classList.add('open');
//   menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// } );
