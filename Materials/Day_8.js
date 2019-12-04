let input = document.getElementById("input");
let input_button = document.getElementById("input_button");
let content = document.getElementById("content");
let header_info = document.getElementById("header_info");
let localData = localStorage.getItem("arrayInputValue") ? localStorage.getItem("arrayInputValue").split(",") : []; // menampilkan data di localStorage dan merubahnya menjadi array

let arrayInputValue = [];

// mengecek value localStorage dan mengassign nya ke array
if (!arrayInputValue.length && localStorage.getItem("arrayInputValue") && localStorage.getItem("arrayInputValue").length) {
  arrayInputValue = localStorage.getItem("arrayInputValue").split(",");
}

if (localData.length && localData[0] !== "") {
  let data = localStorage.getItem("arrayInputValue").split(","); // mengambil data dari localStorage

  for (let i = 0; i < data.length; i++) {
    if (data !== "") {
      create_span(data[i]); // membuat span dan mengisinya dengan data dari localStorage
    }
  }
}

// handle event onenter
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && input.value !== "") {
    input_button.click();
  }
});

// handle event onclick
input_button.addEventListener("click", function(event) {
  let inputValue = input.value; // mengambil nilai input

  // jika nilai input sudah exist di list
  if (arrayInputValue.indexOf(inputValue) !== -1) {
    alert("Todo list sudah terdaftar!");

    return false;
  }

  if (inputValue !== "") {
    arrayInputValue.push(inputValue); // menyimpan hasil input ke dalam array

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("arrayInputValue", arrayInputValue); // menyimpan array ke localStorage
    } else {
      header_info.innerHTML = "Sorry, your browser does not support Web Storage...";
    }

    create_span(inputValue); // membuat span dan mengisinya dengan data dari inputValue

    input.value = ""; // mengosongkan value dari input
  }
});

function create_span(data) {
  let span = document.createElement("SPAN"); // membuat element Span <span></span>
  span.className = "content_span"; // memberi element Span sebuah class <span class="content_span"></span>
  span.innerHTML = data; // memberi isi text ke dalam element Span <span class="content_span">asdasdadads</span>

  let spanClose = document.createElement("SPAN"); // membuat element Span <span></span>
  spanClose.className = "content_span_close"; // memberi element Span sebuah class <span class="content_span_close"></span>
  spanClose.innerHTML = "\u00D7" // memberi text "x" ke dalam element Span <span class="content_span_close">x</span>
  span.appendChild(spanClose); // menggabungkan spanClose ke dalam span

  // logic delete list
  spanClose.addEventListener("click", function() {
    let dataStorage = localStorage.getItem("arrayInputValue").split(",");

    let dataSpan = span.innerHTML.split("<")[0];
    let dataIndex = dataStorage.indexOf(dataSpan);

    dataStorage.splice(dataIndex, 1);

    localStorage.setItem("arrayInputValue", dataStorage);
    arrayInputValue = dataStorage;

    spanClose.parentNode.parentNode.removeChild(spanClose.parentNode);
  });

  content.appendChild(span); // menggabungkan span ke dalam div content
}
