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
    scrollContainer.scrollLeft += 3000;
    bckBtn.style.opacity = '1';
    nxtBtn.style.opacity = '0';
})

bckBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 3000;
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


//Making Hamburger menu

let isMenuOpen = false;

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".list-items");

menuBtn.addEventListener("click", ()=>{
    isMenuOpen = !isMenuOpen;

    if(isMenuOpen){
        menuBtn.classList.add("open");
    } else{
        menuBtn.classList.remove("open");
    };

    navLinks.classList.toggle("active");
});


//Text rotation animation


"use strict";

let words = document.querySelectorAll(".word");

words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    //rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });

    //reaveal and rotate next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i * 80 );
    });
   currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

