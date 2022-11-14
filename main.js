
const Header = document.getElementById("header")
const menuDesplegable = document.getElementById("navigationMenu")
const headerNavbar = document.getElementById("headerNavbar")
const LetraX = document.getElementsByClassName("LetraX")

menuDesplegable.addEventListener("click", activarmenu)
//LetraX.addEventListener("click", QuitarMenuLetraX)


function activarmenu() {

    const header__navbar__desplegableContainer = document.createElement("div");
    header__navbar__desplegableContainer.classList.add("header__navbar--desplegableContainer")

    const header__navbar__desplegableContainer__SeccionDeArriba = document.createElement("div");
    header__navbar__desplegableContainer__SeccionDeArriba.classList.add("header__navbar--desplegableContainer--SeccionDeArriba");

    const container_redes_sociales = document.createElement("ul");
    container_redes_sociales.classList.add("container--redessociales");

    const Li1 = document.createElement("li");
    const Li2 = document.createElement("li");

    const Li_a1 = document.createElement("a");
    const Li_a2 = document.createElement("a");

    Li_a1.href = "https://www.linkedin.com/in/gabriel-leonardo-forero-perea-83644121a/";
    Li_a2.href = "https://github.com/Leopoldo983";

    const li_a_img1 = document.createElement("img");
    const li_a_img2 = document.createElement("img");

    li_a_img1.src = "/assets/linkedin.png";
    li_a_img2.src = "/assets/github.png";

    const LetraX = document.createElement("img");
    LetraX.classList.add("LetraX")
    LetraX.src = "/assets/Imagen de x.png"
    LetraX.onclick = function QuitarMenuLetraX (){
        headerNavbar.classList.remove("none")
        header__navbar__desplegableContainer.classList.add("none")
    }

    const header__navbar__desplegableContainer__SeccionDeAbajo = document.createElement("div");
    header__navbar__desplegableContainer__SeccionDeAbajo.classList.add("header__navbar--desplegableContainer--SeccionDeAbajo");

    const container__linksPartesDePagina = document.createElement("ul");
    container__linksPartesDePagina.classList.add("container--linksPartesDePagina");

    const SeccionDeAbajo_Li1 = document.createElement("li");
    const SeccionDeAbajo_Li2 = document.createElement("li");
    const SeccionDeAbajo_Li3 = document.createElement("li");
    const SeccionDeAbajo_Li4 = document.createElement("li");

    const SeccionDeAbajo_Li_a1 = document.createElement("a");
    const SeccionDeAbajo_Li_a2 = document.createElement("a");
    const SeccionDeAbajo_Li_a3 = document.createElement("a");
    const SeccionDeAbajo_Li_a4 = document.createElement("a");

    SeccionDeAbajo_Li_a1.href = "/index.html";
    SeccionDeAbajo_Li_a2.href = "#projects";
    SeccionDeAbajo_Li_a3.href = "#skills";
    SeccionDeAbajo_Li_a4.href = "/about.html";

    SeccionDeAbajo_Li_a1.textContent = "Home";
    SeccionDeAbajo_Li_a2.textContent = "Projects";
    SeccionDeAbajo_Li_a3.textContent = "Skills";
    SeccionDeAbajo_Li_a4.textContent = "About";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    const header__navbar__desplegableContainer__SeccionDeAbajo__botonContacto = document.createElement("button");
    header__navbar__desplegableContainer__SeccionDeAbajo__botonContacto.classList.add("header__navbar--desplegableContainer--SeccionDeAbajo--botonContacto");

    const buttonContainer_a = document.createElement("a");
    buttonContainer_a.href = "#contact"
    buttonContainer_a.textContent = "Contact Me"

    //Header.appendChild(header__navbar__desplegableContainer)
    //El elemento header le voy a meter dentro lo que haya dentro del parenteziz

    Header.appendChild(header__navbar__desplegableContainer);
    header__navbar__desplegableContainer.append(header__navbar__desplegableContainer__SeccionDeArriba, header__navbar__desplegableContainer__SeccionDeAbajo);
    header__navbar__desplegableContainer__SeccionDeArriba.append(container_redes_sociales, LetraX);
    header__navbar__desplegableContainer__SeccionDeAbajo.append(container__linksPartesDePagina, buttonContainer);
    container_redes_sociales.append(Li1,Li2);
    Li1.appendChild(Li_a1);
    Li2.appendChild(Li_a2);
    Li_a1.appendChild(li_a_img1);
    Li_a2.appendChild(li_a_img2);
    container__linksPartesDePagina.append(SeccionDeAbajo_Li1, SeccionDeAbajo_Li2, SeccionDeAbajo_Li3,SeccionDeAbajo_Li4);
    SeccionDeAbajo_Li1.appendChild(SeccionDeAbajo_Li_a1);
    SeccionDeAbajo_Li2.appendChild(SeccionDeAbajo_Li_a2);
    SeccionDeAbajo_Li3.appendChild(SeccionDeAbajo_Li_a3);
    SeccionDeAbajo_Li4.appendChild(SeccionDeAbajo_Li_a4);
    buttonContainer.appendChild(header__navbar__desplegableContainer__SeccionDeAbajo__botonContacto);
    header__navbar__desplegableContainer__SeccionDeAbajo__botonContacto.appendChild(buttonContainer_a);

    QuitarMenuAnterior()

    
}

function QuitarMenuAnterior (){
    headerNavbar.classList.add("none")
}



