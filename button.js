var addButtons = document.querySelectorAll('.add-book');

function addText () {
  var self = this;
  var weekParent = self.parentNode.parentNode;
  var textarea = self.parentNode.querySelector('textarea');
  var value = textarea.value;
  var item = document.createElement("p");
  var text = document.createTextNode(value);

  item.appendChild(text)
  weekParent.appendChild(item);
}

function removeText() {
    var weekParent = this.parentNode.parentNode;
    var item = weekParent.querySelector("p");
    weekParent.removeChild(item);
}

for (i = 0; i < addButtons.length; i++) { 
    var self = addButtons[i];
    self.addEventListener("click", addText);
}