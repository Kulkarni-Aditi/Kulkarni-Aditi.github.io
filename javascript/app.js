const hamburger =document.querySelector('#mobile-menu');
const tabs =document.querySelector('.navbar__menu');
//display hamburger menue
const mobileMenu=()=> {
    hamburger.classList.toggle('is-active');
    tabs.classList.toggle('active');  
}

hamburger.addEventListener('click',mobileMenu);

// experience education toggle
const edu=document.querySelector('#edu__btn');
const exp=document.querySelector('#exp__btn');

exp.addEventListener('click',function(){
    exp.classList.add('active__btn');
    edu.classList.remove('active__btn');
    document.querySelector("#experience").classList.remove("noshow");
    document.querySelector("#education").classList.add("noshow");
})

edu.addEventListener('click',function(){
    edu.classList.add('active__btn');
    exp.classList.remove('active__btn');
    document.querySelector("#education").classList.remove("noshow");
    document.querySelector("#experience").classList.add("noshow");
})

//highlight active menu
const navLogo=document.querySelector("#navbar__logo");
const highlightMenu = ()=>{
    const activeElement =document.querySelector(".highlight");
    const homeMenu=document.querySelector("#home-page");
    const aboutMenu=document.querySelector("#about-page");
    const resumeMenu=document.querySelector("#resume-page");
    const stackMenu=document.querySelector("#stack-page");

    let scrollPos = window.scrollY;


    if(window.innerWidth>960 && scrollPos<600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth>960 && scrollPos<1300){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        resumeMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth>960 && scrollPos<1900){
        resumeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        stackMenu.classList.remove('highlight');
        return
    }
    
    else if (window.innerWidth>960 && scrollPos<2340){
        stackMenu.classList.add('highlight');
        resumeMenu.classList.remove('highlight');
        
        return
    }
    

    if(activeElement && window.innerWidth<960 &&scrollPos<600 ||activeElement){
        activeElement.classList.remove('highlight');
    }

}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

//close mobile menu on item click
const hideMobileMenu = ()=> {
    const menuBars=document.querySelector('.is-active');
    if(window.innerWidth <=768 && menuBars){
        hamburger.classList.toggle('is-active');
        tabs.classList.remove('active');
    }
}

tabs.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

