// Navigation Menu Starts
let mainMenu = document.getElementById("main-menu");
let openMenuIcon = document.getElementById("open-menu");
let closeMenuIcon = document.getElementById("close-menu");

mainMenu.innerHTML = `<span id="close-menu" onclick="closeMenu()">&#10006;</span>
<a target="_self" href="index.html">Home</a>
<a target="_self" href="contact.html">Contact</a>
<a target="_self" href="about.html">About</a>
<a target="_self" href="https://cartradecenter.blogspot.com/">Blog</a>`;

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
	</form>
	<img id="loadingForm" style="display: none;" src="loadingForm.gif"/>
	<form name="Page Log">
		<input type="text" name ="ip" hidden>
		<input type="text" name ="url" hidden>
		<input type="text" name ="ref" hidden>
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
		container.children[2].style.display = "none";
	}
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		container.children[2].style.display = "block";
		form.style.display = "none";
		fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			console.log("Thank You");
			afterSubmit();
		})
		.catch((error) => {
			console.error("Error!", error.message);
// Additional function call if there's an error with the fetch
		});
	});
});

setTimeout(function() {
	if(confirm("Do you want to talk with Car Expert?")){
		openPopUp();
	}
	else {
		setTimeout(function() {
			if(confirm("Get Special Discount")){
				openPopUp();
			}
		}, 5000);
	}
}, 6000);

//----------- Form Ends

//----------- Log Starts
let pageLogForm = container.children[3];
pageLogForm.children[0].value = new Date();
let logScriptURL = "https://script.google.com/macros/s/AKfycbwBYO_WVPVH7RXksFn49jda2ZHINxfIRypfm3OciYsYTQws3sW5Z_seFnjAJp-VRjYacg/exec";

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            pageLogForm.children[0].value = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
}
getIP();
pageLogForm.children[1].value = document.URL;
pageLogForm.children[2].value = document.referrer;

setTimeout(function(){
	
fetch(logScriptURL, { method: "POST", body: new FormData(pageLogForm) })
.then((response) => {
	console.log("Thank You");
})
.catch((error) => {
		console.error("Error!", error.message);
// Additional function call if there's an error with the fetch
});
}, 5000);
//----------- Log Ends

//----------- Footer Starts
let footer = document.createElement("footer");
document.body.appendChild(footer);

footer.innerHTML = `<section class="select-brand">
		<h1>More Car Brands</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/maruti/maruti.html"><img src="Logos/maruti.png" /></a></div>
			<div class="gallery-items"><a target="_self" href="brands/kia/kia.html"><img src="Logos/kia.png" /></a></div>
			<div class="gallery-items"><a target="_self" href="brands/tata/tata.html"><img src="Logos/tata.png" /></a></div>
			<div class="gallery-items"><a target="_self" href="brands/toyota/toyota.html"><img src="Logos/toyota.png" /></a></div>
			<div class="gallery-items"><a target="_self" href="brands/hyundai/hyundai.html"><img src="Logos/hyundai.png" /></a></div>
		</div>
	</section>
<div class="faq-container">Frequently Asked Questions
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
			<li><a target="_self" href="https://cartradecenter.blogspot.com/">Blog</a></li>
		</ul>
	</div>
	<div class="footer-list">
		<ul>
			<li><a target="_self" href="brands/tata/tata.html">Tata</a></li>
			<li><a target="_self" href="brands/maruti/maruti.html">Maruti</a></li>
			<li><a target="_self" href="brands/kia/kia.html">Kia</a></li>
			<li><a target="_self" href="brands/toyota/toyota.html">Toyota</a></li>
			<li><a target="_self" href="brands/hyundai/hyundai.html">Hyundai</a></li>
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
//----------- Car Price Starts
let carPrice = {
	marutisuzukialto800: "₹ 3 - 5.1 Lakh",
	marutisuzukialto800tour: "₹ 4 - 5.5 Lakh",
	marutisuzukialtok10: "₹ 3.99 - 4.96 Lakh",
	marutisuzukibaleno: "₹ 6.4 - 9 Lakh",
	marutisuzukibrezza: "₹ 7.8 - 13.14 Lakh",
	marutisuzukicelerio: "₹ 5 - 6.9 Lakh",
	marutisuzukiciaz: "₹ 9.10 - 12 Lakh",
	marutisuzukidzire: "₹ 5.9 - 9.3 Lakh",
	marutisuzukieeco: "₹ 5.32 - 6.58 Lakh",
	marutisuzukieecocargo: "₹ 5.2 - 6.4 Lakh",
	marutisuzukiertiga: "₹ 8.4 - 12.3 Lakh",
	marutisuzukiertigatour: "₹ 9.5 - 10 Lakh",
	marutisuzukifronx: "₹ 7.51 - 13.04 Lakh",
	marutisuzukigrandvitara: "₹ 9.9 - 20 Lakh",
	marutisuzukiignis: "₹ 4.4 - 8.1 Lakh",
	marutisuzukiinvicto: "₹ 25.1 - 28.2 Lakh",
	marutisuzukijimny: "₹ Rs.11.8 - 14.95 Lakh",
	marutisuzukispresso: "₹ 4.2 - 6 Lakh",
	marutisuzukisupercarry: "₹ 5.1 - 6 Lakh",
	marutisuzukiswift: "₹ 5 - 8 Lakh",
	marutisuzukiswiftdziretour: "₹ 6 - 7.4 Lakh",
	marutisuzukiwagonr: "₹ 4.9 - 6.91 Lakh",
	marutisuzukiwagonrtour: "₹ 5 - 6.2 Lakh",
	marutisuzukixl6: "₹ 11 - 14.5 Lakh",
	hyundaialcazar: "₹ 15.5 - 20.8 Lakh",
	hyundaiaura: "₹ 6.1 - 9 Lakh",
	hyundaicreta: "₹ 10 - 20 Lakh",
	hyundaicretaNLine: "₹ 15.8 - 20 Lakh",
	hyundaiexter: "₹ 6 - 9 Lakh",
	hyundaigrandI10Nios: "₹ 5 - 8.56 Lakh",
	hyundaii20: "₹ 7 - 10 Lakh",
	hyundaii20NLine: "₹ 8.5 - 12.52 Lakh",
	hyundaiioniq5: "₹ 44 - 45 Lakh",
	hyundaikonaElectric: "₹ 22 - 24 Lakh",
	hyundaitucson: "₹ 28.5 - 34 Lakh",
	hyundaivenue: "₹ 7 - 12 Lakh",
	hyundaivenueNLine: "₹ 11 - 13 Lakh",
	hyundaiverna: "₹ 11 - 16 Lakh",
	kiacarens: "₹ 9 - 16.55 Lakh",
	kiaev6: "₹ 58.55 - 63.84 Lakh",
	kiaseltos: "₹ 10 - 18.10 Lakh",
	kiasonet: "₹ 7 - 15 Lakh",
	tataaltroz: "₹ 6.65 - 10.8 Lakh",
	tataharrier: "₹ 15 - 26.66 Lakh",
	tatanexon: "₹ 8.15 - 15.60 Lakh",
	tatanexonev: "₹ 14.49 - 19.29 Lakh",
	tatapunch: "₹ 6 - 10 Lakh",
	tatapunchev: "₹ 10.99 - 16 Lakh",
	tatasafari: "₹ 16.5 - 27 Lakh",
	tatatiago: "₹ 5.65 - 9.8 Lakh",
	tatatiagoev: "₹ 7.5 - 12 Lakh",
	tatatigor: "₹ 6 - 9.8 Lakh",
	tatatigorev: "₹ 12 - 13.5 Lakh",
	toyotacamry: "₹ 44.2 - 47 Lakh",
	toyotafortuner: "₹ 33 - 50 Lakh",
	toyotafortunerlegender: "₹ 42 - 45.64 Lakh",
	toyotaglanza: "₹ 6 - 10 Lakh",
	toyotahilux: "₹ 29.50 - 37.90 Lakh",
	toyotainnovacrysta: "₹ 18.5 - 26.30 Lakh",
	toyotainnovahycross: "₹ 18.8 - 29.5 Lakh",
	toyotalandcruiser300: "₹ 2 - 2.5 Cr",
	toyotarumion: "₹ 10 - 13.3 Lakh",
	toyotaurbancruiserhyryder: "₹ 10 - 18 Lakh",
	toyotavellfire: "₹ 1.18 - 1.40 Cr"
};

if(document.getElementsByClassName("car-name")[0] !== undefined) {
    let carName = document.getElementsByClassName("car-name")[0].textContent.trim().toLowerCase().replace(/\s/g, "");
    
	document.getElementsByClassName("car-price")[0].innerHTML = `${carPrice[carName]} <br><button onclick="openPopUp()">Buy Now</button>`;
} else {
    console.error("Element with class 'car-name' not found.");
}
//----------- Car Price Ends