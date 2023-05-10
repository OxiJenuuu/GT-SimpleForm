document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nume = document.getElementById("nume").value;
    var localitate = document.getElementById("localitate").value;
    var placeriCatei = document.getElementById("caine").checked;

    function addImg(tip){
        var imagineDiv = document.getElementById("imagine");
        var imagine = document.createElement("img");
        imagine.src = `./assets/${tip}.jpg`;
        imagineDiv.innerHTML = "";
        imagineDiv.appendChild(imagine);
    }
  
    var mesaj = "Salut " + nume + ", acolo la " + localitate + " se pare ca va plac mult ";

      if(placeriCatei){
        mesaj += 'cateii';
        addImg('caine');
      }else{
        mesaj += 'pisicile';
        addImg('pisica')
      }
  
    document.getElementById("mesaj").textContent = mesaj;
  });
