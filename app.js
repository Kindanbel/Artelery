const scroller = document.querySelector(".card-carousel");

const scrollerInner = Array.from(scroller.children);

scrollerInner.forEach(item =>{
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);

    scroller.appendChild(duplicatedItem)
});


//Creating an Image slider gallery

let scrollContainer = document.querySelector(".inner-section2");
const nxtBtn = document.querySelector(".next-btn");
const bckBtn = document.querySelector(".back-btn");


scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.scrollLeft += evt.deltaX;
    scrollContainer.style.scrollBehavior = "auto";
    bckBtn.style.opacity = '1';
})

nxtBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1500;
    bckBtn.style.opacity = '1';
    nxtBtn.style.opacity = '0';
})

bckBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1500;
    bckBtn.style.opacity = '0';
    nxtBtn.style.opacity = '1';
})




//Making responsive buttons

const sec4Btn = document.querySelectorAll(".sec4-btn");

sec4Btn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        sec4Btn.forEach((btn2)=>{
            btn2.style.background = "transparent"
            btn2.style.outline = "1px solid #09adb5"
        })
        btn.style.background = "#09adb5"
    })
})