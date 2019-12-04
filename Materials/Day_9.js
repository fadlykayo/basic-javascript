// ===== Todo List with JQuery =====

$(document).ready(function() {
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

  $("#input_button").click(function() {
    let inputValue = $("input").val();

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

      create_span(inputValue);

      $("input").val("");
    };
  });

  $("#input").keyup(function(event) {
    let inputValue = $("input").val();

    if (event.keyCode === 13 && inputValue !== "") {
      $("#input_button").click();
    }
  });

  function create_span(inputValue) {
    let span = $(`<span class="content_span"></span>`);
    let spanClose = $(`<span class="content_span_close">\u00D7</span>`);

    span.html(`${inputValue}${spanClose[0].outerHTML}`);

    span.find("span").click(function() {
      let dataStorage = localStorage.getItem("arrayInputValue").split(",");

      let dataSpan = span[0].innerHTML.split("<")[0];
      let dataIndex = dataStorage.indexOf(dataSpan);

      dataStorage.splice(dataIndex, 1);

      localStorage.setItem("arrayInputValue", dataStorage);
      arrayInputValue = dataStorage;

      span.remove();
    });

    $("#content").append(span);
  }
});
