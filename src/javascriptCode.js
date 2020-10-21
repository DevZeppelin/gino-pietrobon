//Aquí escribo mi código javascriopt   

    window.addEventListener("scroll", function (){
        var menu = document.querySelector(".menu");
        menu.classList.toggle("sticky", window.scrollY > 0);
    })