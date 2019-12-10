///////////////////////////////////////////////////////// AU CHARGEMENT DE LA PAGE :
$(document).ready(function () {


    modal(); // Appeler la fonction modal()


    //NAVBAR TRANSPARENTE (SCROLL)
    var myNav = document.querySelector("#nav-main");
    window.onscroll = function () {
        if (document.documentElement.scrollTop >= 200 && myNav.classList.contains("nav-transparent")) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");

        }
        else if (document.documentElement.scrollTop < 200 && myNav.classList.contains("nav-colored")) {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");

        }
    };


    //CAROUSEL
    $('.carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
    });


    //COMPTE A REBOURS
    //Date de fin
    var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();

    //Update à chaque seconde
    var interval = setInterval(function () {

        //Date et heure actuelles
        var now = new Date().getTime();

        //Distance entre maintenant et date de fin
        var distance = countDownDate - now;

        //Calculs jours, heures, minutes, secondes
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Afficher avec l'ID "countdown"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        //Message à afficher à la fin du compte à rebours
        if (distance < 0) {
            clearInterval(interval);
            document.ById("countdown").innerHTML = "HAPPY NEW YEAR !";
        }
    }, 1000);
});



///////////////////////////////////////////////////////// FONCTIONS


//POP IN
function modal() {
    var modal = document.getElementById("newsletter-modal");

    //Fermer en cliquant sur la croix
    var span = document.getElementsByClassName("close-newsletter-modal")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }

    //Fermer en cliquant sur le bouton NON
    var button = document.getElementById("newsletter-no");
    button.onclick = function () {
        modal.style.display = "none";
    }

    //Fermer en cliquant à l'extérieur
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

