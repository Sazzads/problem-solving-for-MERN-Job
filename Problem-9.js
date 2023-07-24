// copy to clipboard

const copyToClipboard = (str) => {
  const textarea = document.createElement("textarea");
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const handleCopy = ()=> {
  const text = document.getElementById("text");
  copyToClipboard(text.innerText);
};