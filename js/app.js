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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global letiables
 *
 */

const sections = document.querySelectorAll("[data-nav]");
const navList = document.querySelector("#navbar__list");

let newLink;

/**
 * End Global letiables
 * Begin Main Functions
 *
 */

function navSection() {
	for (let i = 0; i < sections.length; i++) {
		let navItem = document.createElement("li");

		navList.append(navItem);

		newLink = document.createElement("a");

		navItem.append(newLink);

		newLink.innerHTML = sections[i].getAttribute("data-nav");

		newLink.classList.add("menu__link");
		newLink.style.cursor = "pointer";

		newLink.setAttribute("href", "#section" + (i + 1));

		newLink.setAttribute("data-link", sections[i].getAttribute("data-nav"));
	}
}

/*
 * End Main Functions
 */

// build the nav

navSection();

// Add class 'active' to section when near top of viewport

const links = document.querySelectorAll(".nav-link");

const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop - 60) {
			current = section.getAttribute("id");
		}
	});

	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(current)) {
			li.classList.add("active");
		}
	});
};

changeLinkState();
window.addEventListener("scroll", changeLinkState);
// Scroll to section on link click

// Scroll to anchor ID using scrollTO event

const linksList = document.querySelectorAll("a[href^='#section']");

linksList.forEach(function (link) {
	link.addEventListener("click", () => {
		linksList.forEach((link) => {
			if (link.classList.contains("active-link")) {
				link.classList.remove("active-link");
			}
		});

		link.classList.add("active-link");

		let ref = link.href.split("#section");
		ref = "#section" + ref[1];

		// Scroll to section on link click

		window.scroll({
			behavior: "smooth",
			left: 0,

			top: document.querySelector(ref).offsetTop,
		});
	});
});

// scroll to top button
document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
	let scrollableHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let GOLDEN_RATIO = 0.5;

	if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
		//show button
		if (!scrollToTopBtn.classList.contains("showScrollBtn"))
			scrollToTopBtn.classList.add("showScrollBtn");
	} else {
		//hide button
		if (scrollToTopBtn.classList.contains("showScrollBtn"))
			scrollToTopBtn.classList.remove("showScrollBtn");
	}
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
