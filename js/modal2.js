var modal = document.getElementById("PreviewM");
var btn = document.getElementById("previewBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  var form = document.getElementById("Alef-460");
  var previewDiv = document.getElementById("previewContent");
  previewDiv.innerHTML = '';
  
  var clonedForm = form.cloneNode(true);
  var formElements = clonedForm.querySelectorAll('input, textarea, select, ul, label, text, div');
  
  for (var i = 0; i < formElements.length; i++) {
    if (formElements[i].type !== 'button') {
      formElements[i].disabled = true;
    } 
    if(formElements[i].type === 'textarea') {
        formElements[i].classList.add('disabled');

    }
  }
  
  previewDiv.appendChild(clonedForm);
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}