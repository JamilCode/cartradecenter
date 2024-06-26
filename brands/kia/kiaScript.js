let brand = document.getElementById('model-name').textContent;
let changeSlide;
let mainSlide = document.getElementById("main-slide");
let createSlide = '';
const apiKey = 'pat4RGJI6bRore9PP.0beca5b9a027f3be1e5c841e937912f8bc7d447455e1de48936079dd53b3974e';
const baseId = 'appmnRJWQi1P91opm';
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
brandSection.innerHTML = `<hr><h1>More from KIA</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/kia/models/seltos.html"><img src="brands/kia/models/modelPics/seltos.png" /></a><strong>Seltos</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/kia/models/sonet.html"><img src="brands/kia/models/modelPics/sonet.png" /></a><strong>Sonet</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/kia/models/ev6.html"><img src="brands/kia/models/modelPics/ev6.png" /></a><strong>EV6</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/kia/models/carens.html"><img src="brands/kia/models/modelPics/carens.png" /></a><strong>Carens</strong></div>
		</div>`;
//----------- More from Brand