

 function updateText(){
    document.getElementById("text-output").innerText=document.getElementById("text-input").value
  }

  function makeBold(elem){
    elem.classList.toggle("active")
    document.getElementById("text-output").classList.toggle("bold")
  }
  
  function makeItalic(elem){
    elem.classList.toggle("active")
    document.getElementById("text-output").classList.toggle("italic")
  }
  
  function makeUnderline(elem){
      elem.classList.toggle("active")
      document.getElementById("text-output").classList.toggle("underline")
  }
  function alignText(elem, alignType){
    let elems=document.querySelectorAll(".align")
    for (let i = 0; i < elems.length; i++) {
      if(elems[i].classList.contains("active")&&elems[i]!=elem){
        elems[i].classList.remove("active")
      }
    }
    elem.classList.toggle("active")
    document.getElementById("text-output").style.textAlign=alignType
    
  }  