document.addEventListener("selectionchange", () => {
  console.log(document.getSelection().focusNode.data)
})

console.log(tr("hi"))