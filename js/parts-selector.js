function onPartToggle(element)
{
    console.log(element.id);
    if(element.id === 'personal-data-i')
    {
        document.getElementById('personal-data-group').style.display = 'flex';
        document.getElementById('skill-group').style.display = 'none';
        document.getElementById('language-group').style.display = 'none';
        document.getElementById('works-group').style.display = 'none';      
        setPartTitle('Personal Data');      
    }
    else if(element.id === 'skills-i')
    {
        document.getElementById('skill-group').style.display = 'flex';
        document.getElementById('personal-data-group').style.display = 'none';        
        document.getElementById('language-group').style.display = 'none';
        document.getElementById('works-group').style.display = 'none';
        setPartTitle('Skills');      
    }
    else if(element.id === 'language-i')
    {
        document.getElementById('language-group').style.display = 'flex';
        document.getElementById('works-group').style.display = 'none';        
        document.getElementById('skill-group').style.display = 'none';
        document.getElementById('personal-data-group').style.display = 'none';      
        setPartTitle('Languages');        
        
    }        
    else if(element.id === 'works-i')
    {
        document.getElementById('works-group').style.display = 'flex';
        document.getElementById('language-group').style.display = 'none';
        document.getElementById('skill-group').style.display = 'none';
        document.getElementById('personal-data-group').style.display = 'none';        
        setPartTitle('Works');        
    }    
}

function setPartTitle(title)
{
    document.getElementById('partdescription').innerText= title;
}