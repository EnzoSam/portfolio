import { Part } from "../models/part";
import { onPartTogglePart } from "./parts-selector";

export const parts = [];


window.onPartTogglePart = onPartTogglePart;

document.addEventListener("DOMContentLoaded", function(event) 
{
    console.log('READY');
    loadParts();
    load('./components/navbar_w.html','navbar_w');
    load('./components/footer_w.html','footer_w');
    load('./components/aside_w.html','aside_w');
    load('./components/3dmodel/modelviewer.html','model3dviewer');    
    //loadsJs('./js/aside.js');
    //loadsJs('./js/parts-selector.js');
    //loadsJs('./js/modelviewer.js');
});

export function loadParts()
{
    let personalData = new Part("Personal Data", "personal-data.html", "personal-data-i");
    parts.push(personalData);

    let works = new Part("Projects", "projects.html", "works-i");
    parts.push(personalData);
}

export function getPart(referenceId)
{
    return parts.find(p=>p.referenceId === referenceId);
}

export function load(url, elementId)
{
    const element = document.getElementById(elementId);
    if(!element)
        return;

    fetch(url)
    .then(response => response.text())
    .then(data => {
        element.innerHTML = data;
    })
    .catch(error => {
      console.error('Error al cargar el contenido:', error);
    });
}

function loadsJs(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }