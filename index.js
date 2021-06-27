'use strict'
//Navigation Bar Animation
const nav = document.querySelector('.nav');
const navContainer = document.querySelector('.nav--container');
const initialYoffset = 0;
document.addEventListener('scroll', ()=>{
    const currentYoffset = window.pageYOffset;
    const scrolledLength = currentYoffset - initialYoffset;
    if (scrolledLength > 100)
    {
        nav.classList.add('NAV-ON-SCROLL');
        navContainer.classList.add('CONTAINER-ON-SCROLL');
    }

    else if(scrolledLength < 100)
    {
        nav.classList.remove('NAV-ON-SCROLL');
        navContainer.classList.remove('CONTAINER-ON-SCROLL');
    }
});
