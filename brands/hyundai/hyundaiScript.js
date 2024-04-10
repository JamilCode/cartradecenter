let brand = document.getElementById('model-name').textContent;
let changeSlide;
let mainSlide = document.getElementById("main-slide");
let createSlide = '';
const apiKey = 'pat4RGJI6bRore9PP.0beca5b9a027f3be1e5c841e937912f8bc7d447455e1de48936079dd53b3974e';
const baseId = 'appWPgmiWWtjSoSm6';
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
brandSection.innerHTML = `<hr><h1>More from Hyundai</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/alcazar.html"><img src="brands/hyundai/models/modelPics/alcazar.png" /></a><strong>Alcazar</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/aura.html"><img src="brands/hyundai/models/modelPics/aura.png" /></a><strong>Aura</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/creta.html"><img src="brands/hyundai/models/modelPics/creta.png" /></a><strong>Creta</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/cretaNLine.html"><img src="brands/hyundai/models/modelPics/cretaNLine.png" /></a><strong>Creta N Line</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/exter.html"><img src="brands/hyundai/models/modelPics/exter.png" /></a><strong>Exter</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/grandI10Nios.html"><img src="brands/hyundai/models/modelPics/grandI10Nios.png" /></a><strong>Grand i10 Nios</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/i20.html"><img src="brands/hyundai/models/modelPics/i20.png" /></a><strong>i20</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/i20NLine.html"><img src="brands/hyundai/models/modelPics/i20NLine.png" /></a><strong>i20 N Line</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/ioniq5.html"><img src="brands/hyundai/models/modelPics/ioniq5.png" /></a><strong>IONIQ 5</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/konaElectric.html"><img src="brands/hyundai/models/modelPics/konaElectric.png" /></a><strong>Kona Electric</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/tucson.html"><img src="brands/hyundai/models/modelPics/tucson.png" /></a><strong>Tucson</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/venue.html"><img src="brands/hyundai/models/modelPics/venue.png" /></a><strong>Venue</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/venueNLine.html"><img src="brands/hyundai/models/modelPics/venueNLine.png" /></a><strong>Venue N Line</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/hyundai/models/verna.html"><img src="brands/hyundai/models/modelPics/verna.png" /></a><strong>Verna</strong></div>
		</div>`;
//----------- More from Brand