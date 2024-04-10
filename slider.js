let images = [{
    url:  "images/png/rostov-on-don.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 month",
    cost: "Upon request"
},{
    url: "images/png/sochi.png",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 month",
    cost: "Upon request"
},{
    url: "images/png/rostov-patriotic.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 month",
    cost: "Upon request"
}]

function initSlider(){
    if (!images || !images.length) return;
  
    let sliderImages = document.querySelector(".project_photo")
    let sliderArrows = document.querySelector(".projects__nav")
    let sliderDots = document.querySelector(".slider__dots")
    let sliderProjects = document.querySelector(".projects_examples_names")
    let city = document.querySelector(".city")
    let area = document.querySelector(".area")
    let time = document.querySelector(".time")
    let cost = document.querySelector(".cost")
    let curNumber;
    let nextNumber;
    
     
    initImages();
    initText();
    initArrows();
    initDots();
    initProjects();
  
    function initImages(){
       images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
         sliderImages.innerHTML += imageDiv;
         })
    }

    function initText(){
        city.innerText = images[0].city;
        area.innerText = images[0].area;
        time.innerText = images[0].time;
        cost.innerText = images[0].cost;
    }

    function initArrows(){
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow =>
            arrow.addEventListener("click", function(){
                curNumber = +sliderImages.querySelector(".active").dataset.index;
                if (arrow.classList.contains("left")){
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
            moveText(nextNumber);
            moveSlider(nextNumber);
            })
            )
    }

    function initProjects(){
        images.forEach((image, index) => {
            let project = `<h3 class="main__projects_name n${index} ${index === 0? "active" : ""}" data-index = "${index}">${image.title}</h3>`
            sliderProjects.innerHTML += project; 
        })
        sliderProjects.querySelectorAll(".main__projects_name").forEach(project => {
            project.addEventListener("click", function(){
                moveText(this.dataset.index);
                moveSlider(this.dataset.index);
            })
        })
    }

    function initDots(){
        images.forEach((image, index) => {
            let dot = `<div class = "slider__dots-item n${index} ${index === 0? "active" : ""}" data-index = "${index}"></div>` 
            sliderDots.innerHTML += dot 
        })
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function(){
                moveText(this.dataset.index);
                moveSlider(this.dataset.index);
            })
        })

    }


    function moveText(num){
        city.innerText = images[num].city;
        area.innerText = images[num].area;
        time.innerText = images[num].time;
        cost.innerText = images[num].cost;
    }    

    function moveSlider(num){
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderProjects.querySelector(".active").classList.remove("active");
        sliderProjects.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initSlider();
})