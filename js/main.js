import { Part } from "../models/part.js";
import { onPartTogglePart } from "./partsselector.js";

export const parts = [];


window.onPartTogglePart = onPartTogglePart;
window.imgToogle = imgToogle;
window.cerrarModal = cerrarModal;

document.addEventListener("DOMContentLoaded", async function(event) 
{
    loadParts();
    await load('./components/navbar_w.html','navbar_w');
    await load('./components/footer_w.html','footer_w');
    await load('./components/aside_w.html','aside_w');
    await load('./components/3dmodel/modelviewer.html','model3dviewer');    

    onPartTogglePart(document.getElementById('personal-data-i'));

    document.getElementById("modelviewer").addEventListener('model-visibility', (ev) => {

        document.getElementById('loader-model').style.display = 'none';
      });
});

export function loadParts()
{
    let personalData = new Part("Personal Data", "personal-data.html", "personal-data-i");
    parts.push(personalData);

    let works = new Part("Projects", "projects.html", "works-i");
    parts.push(works);

    let skills = new Part("Skills", "skills.html", "skills-i");
    parts.push(skills);

    let language = new Part("Languages", "languages.html", "language-i");
    parts.push(language);    
}

export function getPart(referenceId)
{
    return parts.find(p=>p.referenceId === referenceId);
}

export function load(url, elementId)
{
    return new Promise((resolve, reject)=>{
        try{
    const element = document.getElementById(elementId);
    if(!element)
        return;

    fetch(url)
    .then(response => response.text())
    .then(data => {
        element.innerHTML = data;
        resolve();
    })
    .catch(error => {
      console.error('Error al cargar el contenido:', error);
      reject();
    });
    }
    catch(exc)
    {
        reject(exc);
    }
    });
}

function loadsJs(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }


function imgToogle(src)
{

console.log('************');
document.getElementById('modal').style.display = 'block';
document.getElementById('imagenEnModal').src = src; // Mostrar la imagen seleccionada en el modal
        
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}