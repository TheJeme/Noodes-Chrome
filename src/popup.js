function saveChanges() {
  // Get a value saved in a form.
  var textValue = document.getElementById("textArea").value;
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'textKey': textValue}, function() {

  });
}

async function LoadChanges(){
  var textArea = document.getElementById("textArea");
  chrome.storage.sync.get(['textKey'], function(result) {
    textArea.value = result.textKey;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  LoadChanges();
  var ar = document.getElementById('textArea');
  ar.addEventListener('focusout', function() {
    saveChanges();
  });
});

