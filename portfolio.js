var changingText = document.getElementById('changingText');
var web = "Web Developer";
var vet = "Veteran";
var pic = "Photographer";

function changeWeb() { 
    changingText.textContent = web; 
}; 

function changeVet() { 
    changingText.textContent = vet; 
}; 

function changePic() { 
    changingText.textContent = pic; 
};

function changeSpan() { 
    setInterval(changeWeb, 2000); 
    setInterval(changeVet, 4000); 
    setInterval(changePic, 6000); 
} ; 

changeSpan(); 