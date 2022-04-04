/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global elements
 *
 */

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const selected = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//check if the element is in view or not
function inViewport(sec) {
	let distance = sec.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <=
			(window.innerHeight + 400 || document.documentElement.clientHeight)
	);
}
// navigation bar
function buildNav(sectionsArray) {
	let listFregmant = document.createDocumentFragment();
	sections.forEach((s) => {
		let li = document.createElement("li");
		li.innerHTML = `
			 <a href="#${s.id}" class="menu__link" data-nav="${s.dataset.nav}">${s.dataset.nav}</a>
		 `;
		listFregmant.appendChild(li);
	});
	navList.appendChild(listFregmant);
}
// adding active classes
function showViewed() {
	sections.forEach((s) => {
		let selectedNav = document.querySelector(`[data-nav="${s.dataset.nav}"]`);
		if (inViewport(s)) {
			selectedNav.classList.add("selected");
			s.classList.add("your-active-class");
		} else {
			selectedNav.classList.remove("selected");
			s.classList.remove("your-active-class");
		}
	});
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNav(sections);
document.addEventListener("scroll", showViewed);

/**
 * End Main Functions
 *
 *
 */
