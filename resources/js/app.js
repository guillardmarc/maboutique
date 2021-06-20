window.addEventListener('scroll', () => { 
    const nav = document.querySelector("nav");
    if(window.scrollY > 30 ){
        nav.classList.add("navbar-dark", "bg-dark");
    }
    else{
        nav.classList.remove("navbar-dark", "bg-dark");
    }
})