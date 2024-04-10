let brand = document.getElementById('model-name').textContent;
let changeSlide;
let mainSlide = document.getElementById("main-slide");
let createSlide = '';
const apiKey = 'pat4RGJI6bRore9PP.0beca5b9a027f3be1e5c841e937912f8bc7d447455e1de48936079dd53b3974e';
const baseId = 'appf3cajltJakKKe9';
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
brandSection.innerHTML = `<hr><h1>More from Tata</h1>
		<div class="gallery">
			<div class="gallery-items"><a target="_self" href="brands/tata/models/altroz.html"><img src="brands/tata/models/modelPics/altroz.png" /></a><strong>Altroz</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/harrier.html"><img src="brands/tata/models/modelPics/harrier.png" /></a><strong>Harrier</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/nexon.html"><img src="brands/tata/models/modelPics/nexon.png" /></a><strong>Nexon</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/nexonev.html"><img src="brands/tata/models/modelPics/nexon-ev.png" /></a><strong>Nexon EV</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/punch.html"><img src="brands/tata/models/modelPics/punch.png" /></a><strong>Punch</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/punchev.html"><img src="brands/tata/models/modelPics/punch-ev.png" /></a><strong>Punch EV</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/safari.html"><img src="brands/tata/models/modelPics/safari.png" /></a><strong>Safari</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/tiago.html"><img src="brands/tata/models/modelPics/tiago.png" /></a><strong>Tiago</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/tiagoev.html"><img src="brands/tata/models/modelPics/tiago-ev.png" /></a><strong>Tiago EV</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/tigor.html"><img src="brands/tata/models/modelPics/tigor.png" /></a><strong>Tigor</strong></div>
			
			<div class="gallery-items"><a target="_self" href="brands/tata/models/tigorev.html"><img src="brands/tata/models/modelPics/tigor-ev.png" /></a><strong>Tigor EV</strong></div>
		</div>`;
//----------- More from Brand