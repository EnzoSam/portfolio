document.addEventListener("DOMContentLoaded", async function(event) 
{

});

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
