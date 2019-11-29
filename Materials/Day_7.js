function add_value() {
  // Untuk mengambil nilai input
  let inputValue = document.getElementById("input_value").value;

  // Untuk membuat element Span
  // <span></span>
  let span = document.createElement("SPAN");

  // Untuk memberi element Span sebuah class
  // <span class="content_span"></span>
  span.className = "content_span";

  // Untuk membuat isi text dari element Span
  let spanText = document.createTextNode(inputValue);

  // Untuk menggabungkan isi text ke dalam element Span
  // <span class="content_span">inputValue</span>
  span.appendChild(spanText);

  // Untuk menggabungkan span ke dalam div Content
  let content = document.getElementById("content");
  content.appendChild(span);

  document.getElementById("input_value").value = "";

  // let buttonInput = document.getElementById("input_button");
  //
  // buttonInput.addEventListener("keypress", function(event) {
  //   console.log(event)
  // });

  // Check browser support
  // if (typeof(Storage) !== "undefined") {
  //   localStorage.setItem('arrayInputValue', arrayInputValue);
  // } else {
  //   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  // }
  //
  // document.getElementById("input_add").value = "";
}

// if (localStorage.length) {
//   for (let i = 0; i < localStorage.length; i++) {
//     let span = document.createElement("SPAN");
//     span.className = "span_list";
//     span.value = localStorage.getItem('arrayInputValue')[i];
//
//     let br = document.createElement("BR");
//     document.getElementById("list_container").appendChild(span);
//     document.getElementById("list_container").appendChild(br);
//   }
// }
//
// // Retrieve
// console.log(localStorage.getItem('arrayInputValue'));

/*
Resources:
https://www.w3schools.com/howto/howto_js_todolist.asp
https://www.w3schools.com/tags/tag_input.asp
https://www.w3schools.com/tags/tag_button.asp
https://www.w3schools.com/js/js_htmldom.asp
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/met_document_createtextnode.asp
https://www.w3schools.com/jsref/met_node_appendchild.asp
https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
*/
