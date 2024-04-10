let brand = document.getElementById('model-name').textContent;
let changeSlide;
let mainSlide = document.getElementById("main-slide");
let createSlide = '';
const apiKey = 'pat4RGJI6bRore9PP.0beca5b9a027f3be1e5c841e937912f8bc7d447455e1de48936079dd53b3974e';
const baseId = 'appsrKnt4Xd6lTYza';
const apiUrl = `https://api.airtable.com/v0/${baseId}/${brand}`;

fetch(apiUrl, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
	const sortedData = data.records.sort((a, b) => {
        const nameA = a.fields['Image Name'].toLowerCase(); // Assuming 'Image Name' is the column name
        const nameB = b.fields['Image Name'].toLowerCase();
        return nameA.localeCompare(nameB);
    });
	
    for(let i=0; i<data.records.length; i++){
        createSlide += `<div class="slide fade">
            <span class="serial-number">${i+1}/${data.records.length}</span>
            <img src="${data.records[i].fields.Photos[0].url}" />
            <h2 class="caption">${data.records[i].fields.Title}</h2>
            </div>`;
    };
    mainSlide.innerHTML = createSlide + `<a class="prev" onclick="changeSlide(-1)">❮</a>
        <a class="next" onclick="changeSlide(1)">❯</a>`;
    
    let slideIndex = 1;
    showSlides(slideIndex);

    changeSlide = function plusSlides(n) {
        showSlides(slideIndex += n);
    };

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }
})
.catch(error => console.error('Error fetching data:', error));

//----------- More from Brand
let brandSection = document.createElement("section");
brandSection.className = "select-brand";
document.getElementsByClassName("spec")[0].appendChild(brandSection);
brandSection.innerHTML = `<hr><h1>More from Maruti</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/maruti/models/swift.html"><img src="brands/maruti/models/modelPics/swift.png" /></a><strong>Swift</strong></div>
		
			<div class="gallery-items"><a target="_self" href="brands/maruti/models/brezza.html"><img src="brands/maruti/models/modelPics/brezza.png" /></a><strong>Brezza</strong></div>
		
			<div class="gallery-items"><a target="_self" href="brands/maruti/models/ertiga.html"><img src="brands/maruti/models/modelPics/ertiga.png" /></a><strong>Ertiga</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/baleno.html"><img src="brands/maruti/models/modelPics/baleno.png" /></a><strong>Baleno</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/fronx.html"><img src="brands/maruti/models/modelPics/fronx.png" /></a><strong>Fronx</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/dzire.html"><img src="brands/maruti/models/modelPics/dzire.png" /></a><strong>DZire</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/wagonr.html"><img src="brands/maruti/models/modelPics/wagonr.png" /></a><strong>Wagon R</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/altok10.html"><img src="brands/maruti/models/modelPics/altok10.png" /></a><strong>Alto K10</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/jimny.html"><img src="brands/maruti/models/modelPics/jimny.png" /></a><strong>Jimny</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/celerio.html"><img src="brands/maruti/models/modelPics/celerio.png" /></a><strong>Celerio</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/alto800.html"><img src="brands/maruti/models/modelPics/alto800.png" /></a><strong>Alto 800</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/eeco.html"><img src="brands/maruti/models/modelPics/eeco.png" /></a><strong>Eeco</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/xl6.html"><img src="brands/maruti/models/modelPics/xl6.png" /></a><strong>XL6</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/ignis.html"><img src="brands/maruti/models/modelPics/ignis.png" /></a><strong>Ignis</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/invicto.html"><img src="brands/maruti/models/modelPics/invicto.png" /></a><strong>Invicto</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/ciaz.html"><img src="brands/maruti/models/modelPics/ciaz.png" /></a><strong>Ciaz</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/spresso.html"><img src="brands/maruti/models/modelPics/spresso.png" /></a><strong>S-Presso</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/ertigatour.html"><img src="brands/maruti/models/modelPics/ertigatour.png" /></a><strong>Ertiga Tour</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/alto800tour.html"><img src="brands/maruti/models/modelPics/alto800tour.webp" /></a><strong>Alto 800 Tour</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/eecocargo.html"><img src="brands/maruti/models/modelPics/eecocargo.png" /></a><strong>Eeco Cargo</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/grandvitara.html"><img src="brands/maruti/models/modelPics/grandvitara.png" /></a><strong>Grand Vitara</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/supercarry.html"><img src="brands/maruti/models/modelPics/supercarry.png" /></a><strong>Super Carry</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/swiftdziretour.html"><img src="brands/maruti/models/modelPics/swiftdziretour.png" /></a><strong>Swift DZire Tour</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/maruti/models/wagonrtour.html"><img src="brands/maruti/models/modelPics/wagonrtour.png" /></a><strong>Wagon R Tour</strong></div>
		</div>`;
//----------- More from Brand