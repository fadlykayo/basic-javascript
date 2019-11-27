let arrayInputValue = [];

function add_list() {
  let inputValue = document.getElementById("input_add").value;
  let inputNode = document.createTextNode(inputValue);

  arrayInputValue.push(inputValue);

  let span = document.createElement("SPAN");
  span.className = "span_list";
  span.appendChild(inputNode);

  let br = document.createElement("BR");
  document.getElementById("list_container").appendChild(span);
  document.getElementById("list_container").appendChild(br);

  let spanLength = document.getElementsByClassName("span_list").length;

  // Check browser support
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('arrayInputValue', arrayInputValue);
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

  document.getElementById("input_add").value = "";
};

console.log(localStorage.length)

if (localStorage.length) {
  for (let i = 0; i < localStorage.length; i++) {
    let span = document.createElement("SPAN");
    span.className = "span_list";
    span.value = localStorage.getItem('arrayInputValue')[i];

    let br = document.createElement("BR");
    document.getElementById("list_container").appendChild(span);
    document.getElementById("list_container").appendChild(br);
  }
}

// Retrieve
console.log(localStorage.getItem('arrayInputValue'));
