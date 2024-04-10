let brand = document.getElementById('model-name').textContent;
let changeSlide;
let mainSlide = document.getElementById("main-slide");
let createSlide = '';
const apiKey = 'pat4RGJI6bRore9PP.0beca5b9a027f3be1e5c841e937912f8bc7d447455e1de48936079dd53b3974e';
const baseId = 'appan2vZpVRqw2SQ4';
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
brandSection.innerHTML = `<hr><h1>More from Toyota</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/glanza.html"><img src="brands/toyota/models/modelPics/glanza.png" /></a><strong>Glanza</strong></div>

			<div class="gallery-items"><a target="_self" href="brands/toyota/models/innovahycross.html"><img src="brands/toyota/models/modelPics/innovahycross.png" /></a><strong>Innova Hycross</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/fortunerlegender.html"><img src="brands/toyota/models/modelPics/fortunerlegender.png" /></a><strong>Fortuner Legender</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/camry.html"><img src="brands/toyota/models/modelPics/camry.png" /></a><strong>Camry</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/vellfire.html"><img src="brands/toyota/models/modelPics/vellfire.png" /></a><strong>Vellfire</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/rumion.html"><img src="brands/toyota/models/modelPics/rumion.png" /></a><strong>Rumion</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/hilux.html"><img src="brands/toyota/models/modelPics/hilux.png" /></a><strong>Hilux</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/urbancruiserhyryder.html"><img src="brands/toyota/models/modelPics/urbancruiserhyryder.png" /></a><strong>Urban Cruiser Hyryder</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/landcruiser300.html"><img src="brands/toyota/models/modelPics/landcruiser300.png" /></a><strong>Land Cruiser 300</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/innovacrysta.html"><img src="brands/toyota/models/modelPics/innovacrysta.png" /></a><strong>Innova Crysta</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/toyota/models/fortuner.html"><img src="brands/toyota/models/modelPics/fortuner.png" /></a><strong>Fortuner</strong></div>
		</div>`;
//----------- More from Brand