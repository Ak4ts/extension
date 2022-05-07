var textConfig = window.getSelection();
var text = ""

document.addEventListener("mouseup", () => {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://translate-extension-test.herokuapp.com/translate",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json"); //Obrigatorio API

  xhr.onload = function () {
    const newer = JSON.parse(xhr.response); 
    alert(newer.resp.text);
  };
  xhr.send(JSON.stringify({ text }));
});


document.addEventListener("selectionchange", () => {
  if(textConfig.focusOffset < textConfig.anchorOffset){
    text = textConfig.focusNode?.data.slice(textConfig.focusOffset, textConfig.anchorffset);
  } else {
    text = textConfig.focusNode?.data.slice(textConfig.anchorOffset, textConfig.focusOffset);
  }
})