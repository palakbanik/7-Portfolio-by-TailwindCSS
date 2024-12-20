/* ============== TOGGLE BUTTON ============== 2nd work */
// this all are variables, this called variables.
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

// 1st typing code
// this code is when I click on any link, the menu remove from the display.
navLink.forEach((link) => (
	link.addEventListener("click", () => {
		navMenu.classList.add("hidden")
	})
))

// 2nd typing code
// this code is when i click menu btn it will be show menu bar
closeIcon.addEventListener("click", () => {
	navMenu.classList.add("hidden")
})

// 3rd typing code
// this code is when i click close btn it will be remove menu bar
hamburger.addEventListener("click", () => {
	navMenu.classList.remove("hidden")
})


/* ============== DARK LIGHT THEME ============== 1st work */
// this all codes for theme btn.
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

// 1st typing code
if (localStorage.getItem("mode") == "dark") {
	darkMode();
} else {
	lightMode();
}

// 4th typing code
themeBtn.addEventListener("click", (e) => {
	if (localStorage.getItem("mode") == "light") {
		darkMode();
	} else {
		lightMode();
	}
})

// 2nd typing code
function darkMode() {
	html.classList.add("dark");
	themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
	localStorage.setItem("mode", "dark");
}
// 3rd typing code
function lightMode() {
	html.classList.remove("dark");
	themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
	localStorage.setItem("mode", "light");
}


/* ============== TABS ============== */
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
const all = document.querySelectorAll('.work_card');
const uiux = document.querySelectorAll('.uiux');
const apps = document.querySelectorAll('.app');
const branding = document.querySelectorAll('.branding');

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		indicator.style.width = tab.getBoundingClientRect().width + "px";
		indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

		tabs.forEach(t => t.classList.remove("text-whiteColor"));
		tab.classList.add("text-whiteColor");

		const tabval = tab.getAttribute("data-tabs");

		all.forEach(item => {
			item.style.display = "none"
		});

		if (tabval == "uiux") {
			uiux.forEach(item => {
				item.style.display = "block"
			});
		} else if (tabval == "branding") {
			branding.forEach(item => {
				item.style.display = "block"
			});
		} else if (tabval == "app") {
			apps.forEach(item => {
				item.style.display = "block"
			});
		} else {
			all.forEach(item => {
				item.style.display = "block"
			});
		}
	})

})
/* ============== CHANGE BACKGROUND HEADER ============== */
const scrollHeader = () => {
	const navbar = document.getElementById("navbar");
	const aTag = document.querySelectorAll("nav ul li a");
	const themeToggle = document.getElementById("theme-toggle");
	const hamburger = document.getElementById("hamburger");
	const logo = document.getElementById("logo");
	const whiteLogo = document.getElementById("white-logo");

	if (this.scrollY >= 200) {
		navbar.classList.add("bg-primaryColor");
		aTag.forEach((item) => {
			item.classList.add("text-whiteColor")
		})

		themeToggle.classList.add("text-whiteColor");
		hamburger.classList.add("text-whiteColor");
	} else {
		navbar.classList.remove("bg-primaryColor");
		aTag.forEach((item) => {
			item.classList.remove("text-whiteColor")
		})

		themeToggle.classList.remove("text-whiteColor");
		hamburger.classList.remove("text-whiteColor");
	}
}

window.addEventListener("scroll", scrollHeader)

/* ============== SHOW SCROLL UP ============== */
const scrollUp = () => {
	const scrollUpBtn = document.getElementById("scroll-up");

	if (this.scrollY >= 250) {
		scrollUpBtn.classList.remove("-bottom-1/2");
		scrollUpBtn.classList.add("bottom-4");
	} else {
		scrollUpBtn.classList.add("-bottom-1/2");
		scrollUpBtn.classList.remove("bottom-4");
	}
};

window.addEventListener("scroll", scrollUp)

/* ============== SCROLL SECTION ACTIVE LINK ============== */


/* ============== SCROLL REVEAL ANIMATION ============== */