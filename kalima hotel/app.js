// https://www.ballynahinch-castle.com/
const bgImgs = document.querySelectorAll(".img-container img");
bgImgs[0].style.opacity = "1";

let count = 1;
setInterval(()=>{
    if(document.body.clientWidth <= 900){
        origin.style.transform = "translateX(0%)";
    }
    console.log(document.body.clientWidth)
    if(count > 3){
        count = 0;
    }
    if(count == 0){
        bgImgs[3].style.opacity = "0";
    }else{
        bgImgs[count - 1].style.opacity="0";
    }
    bgImgs[count].style.opacity = "1";
    count = count + 1;
    console.log("dome")
},3000);

const prebBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const origin = document.querySelector(".img-slider");

nextBtn.addEventListener("click",(e) => {
    origin.style.transform = "translateX(-1000px)";
})
prebBtn.addEventListener("click",(e) => {
    origin.style.transform = "translateX(0%)";
})

const hamBtn = document.querySelector(".ham");
const movingNav = document.querySelector(".side-nav-links");
let hamOpen = false;
hamBtn.addEventListener("click", () => {
    if(hamOpen){
        movingNav.style.transform = "translateX(100%)";
        hamOpen = false;
    }else{
    movingNav.style.transform = "translateX(0%)";
    hamOpen = true;
}
})

