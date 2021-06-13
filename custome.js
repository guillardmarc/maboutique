/*const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 10 ){
        console.log("hello scrooll");
        navigation.classList.remove('bg-glass');
        navigation.classList.add('bg-light');
    } else {
        console.log("hello top");
        navigation.classList.remove('bg-light');
        navigation.classList.add('bg-glass');
    }
})*/
window.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    const logo = document.querySelector("#logo");
    if(window.scrollY > 30 ){
        nav.classList.add("navbar-dark", "bg-dark");
        nav.classList.remove("forme");
        logo.classList.add("logo-min");
        logo.classList.remove("logo");
    }
    else{
        nav.classList.remove("navbar-dark", "bg-dark");
        nav.classList.add("forme");
        logo.classList.remove("logo-min");
        logo.classList.add("logo");
    }
})