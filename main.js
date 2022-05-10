
function navControl(noactive, target) {
    if (document.getElementsByClassName(noactive)[0].style.display == "flex") {
        document.getElementsByClassName(target)[0].style.display = "flex";
        document.getElementsByClassName(noactive)[0].style.display = "none";
    } else {
        document.getElementsByClassName(noactive)[0].style.display = "none";
        document.getElementsByClassName(target)[0].style.display = "flex";
    }
}

function tombolInt(active, m, n) {
    var btn_1 = document.getElementsByClassName("btn")[0];
    var btn_2 = document.getElementsByClassName("btn")[1];
    if ((document.getElementsByClassName(active)[0].style.display == "flex")) {
        if (document.getElementsByClassName("btn")[m].classList.contains("btn-clicked") == false) {
            document.getElementsByClassName("btn")[m].classList.replace("btn-normal", "btn-clicked");
            document.getElementsByClassName("btn")[n].classList.replace("btn-clicked", "btn-normal");
        }
    }
}