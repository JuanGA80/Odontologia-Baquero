const modal = document.getElementById("modalV");
const cerrar = document.getElementById("close1");
const show = document.getElementById("More");

const modal2 = document.getElementById("modalV2");
const cerrar2 = document.getElementById("close2");
const show2 = document.getElementById("More2");

show.addEventListener("click", function()
    {
        modal.classList.add("openmodal");
       
    }

)
cerrar.addEventListener("click", function()
    {
        modal.classList.remove("openmodal");
       
    }

)

show2.addEventListener("click", function()
    {
        modal2.classList.add("openmodal2");
       
    }

)
cerrar2.addEventListener("click", function()
    {
        modal2.classList.remove("openmodal2");
       
    }

)

