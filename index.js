/* =========================
   MOBILE MENU TOGGLE
========================= */

let menuList = document.getElementById("menuList");

if (menuList) {
    menuList.style.maxHeight = "0px";

    function menubar() {
        if (menuList.style.maxHeight === "0px") {
            menuList.style.maxHeight = "300px";
        } else {
            menuList.style.maxHeight = "0px";
        }
    }
}

/* =========================
   INFINITE AUTO SLIDER
   (CSS animation based)
========================= */

const track = document.getElementById("sliderTrack");

if (track) {
    // cards duplicate karo for infinite effect
    track.innerHTML += track.innerHTML;
}

const track1 = document.getElementById("sliderTrack1");

if (track1) {
    // cards duplicate karo for infinite effect
    track1.innerHTML += track1.innerHTML;
}
