// Navigation Menu Starts
let mainMenu = document.getElementById("main-menu");
let openMenuIcon = document.getElementById("open-menu");
let closeMenuIcon = document.getElementById("close-menu");

mainMenu.innerHTML = `<span id="close-menu" onclick="closeMenu()">&#10006;</span>
<a target="_self" href="index.html">Home</a>
<a target="_self" href="contact.html">Contact</a>
<a target="_self" href="about.html">About</a>
<a target="_self" href="blogs/blogs.html">Blog</a>`;

function openMenu() {
	mainMenu.style.left = "0";
}

function closeMenu() {
	mainMenu.style.left = "-100%";
}

function goToHome() {	// use this to go to home
	window.location.href = "index.html";
}
// Navigation Menu Ends

//----------- Form Starts
let interest;
let scriptURL;
let thankYou;
let form;
let container = document.createElement("div");
container.className = "container";
function closePopUp() {
	container.style.display = 'none';
}

function openPopUp() {
	container.style.display = 'block';
}

if(document.getElementById("contact-for") !== undefined) {
	document.body.appendChild(container);

	container.innerHTML = `<div id="thankYouBanner" style="display: none">
		<h1>Thank You for your interest</h1>
		<h3>Our Car Expert will contact you soon</h3>
		<button onclick="closePopUp()">Close</button>
	</div>
	<form name="Car Lead">
		<input type="text" id="name" name="name" placeholder="Your Name" required><br>
		<input type="tel" id="phone" name="phone" placeholder="Your Contact Number" pattern="[0-9]{10}" required><br>
		<input type="text" id="interest" name ="interest" hidden>
		<input type="submit" value="Submit">
		<button onclick="closePopUp()">Close</button>
	</form>`;

}	
document.addEventListener("DOMContentLoaded", function() {
	interest = container.children[1].children[4];
	scriptURL ="https://script.google.com/macros/s/AKfycbwa_3qPtB4DBQOJ2EjdaoYIAH8pFJlyWbOwxtGPq1D9Hd05zX3-zsnEcqopA777joTmpw/exec";
	thankYou = container.children[0];
	form = container.children[1];
	interest.value = document.getElementById("contact-for").textContent;
	
	function afterSubmit() {
		form.reset();
		thankYou.style.display = "block";
		form.style.display = "none";
	}
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			console.log("Success!", response);
			afterSubmit();
		})
		.catch((error) => {
			console.error("Error!", error.message);
// Additional function call if there's an error with the fetch
		});
	});
});
//----------- Form Ends

//----------- Footer Starts
let footer = document.createElement("footer");
document.body.appendChild(footer);

footer.innerHTML = `<div class="faq-container">Frequently Asked Questions
		<button class="faq" onclick="answer(this)">What is Car Trade Center?</button>
		<div class="panel">
			<p>Car Trade Center is your online destination to explore a variety of vehicles and find all the information you need to make a smart decision. We connect you with trusted dealers, making the car-buying process simple and efficient.</p>
		</div>
		<button class="faq" onclick="answer(this)">What is the process of buying a car in Car Trade Center?</button>
		<div class="panel">
			<p>The process of buying a car on Car Trade Center is straightforward. Simply click "buy," and our car expert will guide you through various offers. Choose the best offer that suits your preferences, and we'll handle all the paperwork for a hassle-free experience.</p>
		</div>
		<button class="faq" onclick="answer(this)">Do you sell second-hand cars too?</button>
		<div class="panel">
			<p>Yes, we offer a wide selection of both new and second-hand cars. Whether you're in the market for a brand-new vehicle or a reliable pre-owned option, we provide a diverse range to cater to your preferences and budget.</p>
		</div>
		<button class="faq" onclick="answer(this)">Are your second hand cars in good conditions?</button>
		<div class="panel">
			<p>Absolutely! Our second-hand cars at Car Trade Center undergo thorough inspections by experts to ensure their quality and reliability. Rest assured, each vehicle is priced reasonably, providing you with excellent value for your investment.</p>
		</div>
		<button class="faq" onclick="answer(this)">Can I get a free ride?</button>
		<div class="panel">
			<p>Yes, we offer free rides! No matter where you're from, simply reach out to us, and we'll arrange a complimentary ride for you.</p>
		</div>
</div>
<div class="footer-wrapper">
	<div class="footer-list">
		<ul>
			<li><a target="_self" href="index.html">Home</a></li>
			<li><a target="_self" href="about.html">About</a></li>
			<li><a target="_self" href="contact.html">Contact</a></li>
			<li><a target="_self" href="blogs/blogs.html">Blog</a></li>
		</ul>
	</div>
	<div class="footer-list">
		<ul>
			<li><a target="_self" href="brands/tata/tata.html">Tata</a></li>
			<li><a target="_self" href="brands/maruti/maruti.html">Maruti</a></li>
			<li><a target="_self" href="brands/kia/kia.html">Kia</a></li>
			<li><a target="_self" href="brands/toyota/toyota.html">Toyota</a></li>
		</ul>
	</div>
</div>`;

let faq = document.getElementsByClassName("faq");

function answer(button) {
	let panel = button.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };
//----------- Footer Ends