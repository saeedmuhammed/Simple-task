let num = document.getElementsByName("elements")[0];
let text = document.getElementsByName("texts")[0];
let type = document.getElementsByName("type")[0];
let create = document.getElementsByName("create")[0];
let form = document.forms[0]; 
let results = document.getElementsByTagName("div")[0];
form.onsubmit = function(e){
    results.innerHTML="";
    
    e.preventDefault();
    for (let index = 0; index < num.value ; index++) {
       let elemet = document.createElement(`${type.value}`);
       let txt = document.createTextNode(`${text.value}`);
       elemet.appendChild(txt);
       elemet.setAttribute("id" , `id-${index+1}`);
       results.appendChild(elemet);
    }
   
}